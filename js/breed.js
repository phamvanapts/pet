'use strict';
// alert("Xin chào, kiểm tra chương trình!")
/**
 * Button Add 
 * Giao diện ẩn phần thêm dữ liệu
 * Khi ấn Add thì mới hiện ra cho người nhập vào.
 */
const addBreedbtn = document.getElementById("add__breed-btn");
let showMain = false;
addBreedbtn.addEventListener('click', function(){
    if(!showMain){
        document.getElementById('main__breed').style.display='block';
        showMain = !showMain;
        addBreedbtn.innerHTML = "Hide";
    }else{
        document.getElementById('main__breed').style.display='none';
        showMain = !showMain;
        addBreedbtn.innerHTML = "Add";
    }

})
/**
 * Gán các giá trị dữ liệu từ form nhập
 */
const tableBodyEl = document.getElementById("tbody");
const inputbreed = document.getElementById("input-breed");
const inputbreedtype = document.getElementById("inputbreed-type");
const submitbreedbtn = document.getElementById("submitbreed-btn");
/**
 * Thể hiện reder HTML bản Breed
 */
function renderTableBreed(breedArr){
    tableBodyEl.innerHTML=""; //gán giá trị rỗng cho bảng.
    for(let i = 0; i < breedArr.length; i++){
        // alert(breedArr.length);
        let breed = breedArr[i];
        const row = document.createElement('tr');
        row.innerHTML =`<tr>
							<th scope="row">${i+1}</th>
							<td>${breed.namebreed}</td>
							<td>${breed.typebreed}</td>
							<td><button type="button" class="btn btn-danger" 
                            onclick="DeleteBreed('${breed.namebreed}')">Delete</button>
							</td>
						</tr>`;
        tableBodyEl.appendChild(row);
    }
}

renderTableBreed(breedArr); // render breed khi chạy
/**
 * Hàm kiểm tra điều kiện để nhập một loạ giống vào
 * 1. Kiểm tra namebreed không rỗng.
 * 2. Kiểm tra namebreed không trùng trong breedArr
 * 3. Loại phải được chọn.
 */

/**
 * Thêm mới 1 Breeed
 * Khi ấn nút
 * Kiểm tra BreedName không được rỗng
 * Kiểm tra điều kiện đã có Breedname chưa
 */
submitbreedbtn.addEventListener('click', function(e){
    const databreed ={
        namebreed: inputbreed.value,
        typebreed: inputbreedtype.value,
    };
    // console.log(`namebreed = ${databreed.namebreed}`); //Kiểm tra kết quả nhập từ bàn phím
    // console.log(`typebreed = ${databreed.typebreed}`); //Kiểm tra kết quả nhập từ bàn phím
    breedArr.unshift(databreed); // Đưa vào đầu mảng breedArr
    renderTableBreed(breedArr);  // Render mảng ra trang;
    saveToStorage('breedArr',breedArr);   // Lưu vào Storage
})
/**
 * Xoá một breed
 * Khi ấn Delete hiện thông báo có muốn xoá không.
 * Nếu đòng ý thì xoá
 */
const DeleteBreed = (namebreed)=>{
    if(confirm('Bạn có muốn xoá không?')){
        for(let i = 0; i < breedArr.length; i++){
            if(breedArr[i].namebreed == namebreed){
                // alert(`namebreed = ${namebreed}`);
                breedArr.splice(i,1); //xoá 1 phần từ khỏi mảng
                saveToStorage('breedArr',breedArr);   // Lưu vào Storage
                renderTableBreed(breedArr);  // Render mảng ra trang;
                break;
            }
        }
    }
}


