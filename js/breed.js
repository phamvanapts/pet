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
 * Hàm kiểm tra namebreed có rỗng hay không.
 * Nếu rỗng thì thông báo
 */
function breedUnique(databreed){
    return false; //trả về false ==> không ghi dữ liệu
} //kết thúc hàm
/**
 * Hàm kiểm tra điều kiện để nhập một loạ giống vào
 * 1. Kiểm tra namebreed không rỗng.
 * 2. Kiểm tra namebreed không trùng trong breedArr
 * 3. Loại phải được chọn.
 */
function validateBreed(databreed){
    if(breedUnique(databreed.namebreed)){     //Kiểm tra breed không bị trùng
        return true;                //trả về giá trị đúng
    } // kết thúc if
    return false; //trả về giá trị false ==> Kiểm tra sai, không thực hiện ghi dữ liệu
}
/**
 * Thêm mới 1 Breeed
 * Khi ấn nút
 * Kiểm tra BreedName không được rỗng
 * Kiểm tra điều kiện đã có Breedname chưa
 */
submitbreedbtn.addEventListener('click', function(e){
    const databreed ={                       // Tạo đối tượng databreed gồm 2 phần tử
        namebreed: inputbreed.value,        // gán giá trị namebreed từ form nhập
        typebreed: inputbreedtype.value,    // gán giá trị typebreed từ form nhập
    }; //kết thúc tạo đối tượng
    const validate = validateBreed(databreed); //Gán biến bằng hàm kiểm tra
    if(validateBreed){
        breedArr.unshift(databreed); // Đưa vào đầu mảng breedArr
        renderTableBreed(breedArr);  // Render mảng ra trang;
        saveToStorage('breedArr',breedArr);   // Lưu vào Storage
    } else{
        alert(`Không lưu được Breed! Hãy thực hiện lại`); //Thông báo không lưu
    } // kết thúc if
}   // kết thúc hàm
) //kết thúc nút submit      
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


