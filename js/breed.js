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
const tableBodyEl = document.getElementById("tbody");               //tạo biến lưu đoạn code html
const inputbreed = document.getElementById("input-breed");          // biến lưu DOM form inputbreed
const inputbreedtype = document.getElementById("inputbreed-type");  //biến lưu DOM breedtype
const submitbreedbtn = document.getElementById("submitbreed-btn");  // biến lưu DOM button submit
/**
 * Thể hiện reder HTML bản Breed
 */
function renderTableBreed(breedArr){
    tableBodyEl.innerHTML=""; //gán giá trị rỗng cho bảng.
    for(let i = 0; i < breedArr.length; i++){
        // alert(breedArr.length);
        // let breed = breedArr[i];
        const row = document.createElement('tr');
        row.innerHTML =`<tr>
							<th scope="row">${i+1}</th>
							<td>${breedArr[i].breed}</td>
							<td>${breedArr[i].type}</td>
							<td><button type="button" class="btn btn-danger" 
                            onclick="DeleteBreed('${breedArr[i].name}')"> <i class="bi bi-trash3"></i></button>
							</td>
						</tr>`;
        tableBodyEl.appendChild(row);
    }
}

renderTableBreed(breedArr); // render breed khởi tạo.
/**
 * 1.Hàm kiểm tra namebreed có rỗng không
 * Nếu namebreed rỗng thì trả về false, ngược lại true
 */
function checkNameBreed(databreed){
    if(databreed ==""){             //Nếu namebreed rỗng
        alert("Nhập vào Breed");    //Thông báo nhập Breed
        return false;               //Trả về false ==> không ghi dữ liệu 
    } //Kết thúc if
    return true;                    //Trả về true
}
/**
 * 2.Hàm kiểm tra namebreed có trùng với các namebreed khác hay không.
 * Nếu mảng breed rỗng thì trả về true
 *  Nếu trùng thì thông báo, trả về false, ngược lại thì true
 */
function breedUnique(databreed){
    if(breedArr.length==0) return true; //Nếu mảng breed rỗng thì trả về true
    for(let i =0; i < breedArr.length; i ++){ // duyệt mảng breedArr
        if(breedArr[i].breed == databreed){
            alert("Trùng tên breed, nhập lại!"); // Thông báo trùng tên
            return false;   //trả về false ==> không ghie dữ liệu.
        }// kết thúc if
    }
    return true; //trả về true ==> kiểm tra không trùng tên breed.
} //kết thúc hàm
/**
 * 3.Kiểm tra type đã được chọn hay chưa
 * Nếu type = "Select Type " thì trả về false ==> không ghi dữ liệu
 * Ngược lại thì true.
 */
function checkTypeBreed(databreed){
    if(databreed =="Select Type"){             //Nếu namebreed rỗng
        alert("Chọn Type Breed");    //Thông báo nhập Type Breed
        return false;               //Trả về false ==> không ghi dữ liệu 
    } //Kết thúc if
    return true;                    //Trả về true
}//kết thúc hàm
/**
 * Hàm kiểm tra điều kiện để nhập một loạ giống vào
 * 1. Kiểm tra namebreed không rỗng.
 * 2. Kiểm tra namebreed không trùng trong breedArr
 * 3. Loại phải được chọn.
 */
function validateBreed(databreed){                  //Hàm kiểm tra
    if(breedUnique(databreed.breed)             //điều kiện tên duy nhất
        &&checkNameBreed(databreed.breed)       //Kiểm tra breed không bị trùng  
        &&checkTypeBreed(databreed.type)){     //Kiểm tra type
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
        breed: inputbreed.value,        // gán giá trị namebreed từ form nhập
        type: inputbreedtype.value,    // gán giá trị typebreed từ form nhập
    }; //kết thúc tạo đối tượng
    const validate = validateBreed(databreed); //Gán biến bằng hàm kiểm tra
    // alert(validate); //Kiểm tra giá trị validate
    if(validate){
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
 * Nếu đồng ý thì xoá
 */
const DeleteBreed = (breed)=>{
    if(confirm('Bạn có muốn xoá không?')){
        for(let i = 0; i < breedArr.length; i++){
            if(breedArr[i].breed == breed){
                alert("test");
                // alert(`namebreed = ${namebreed}`);
                breedArr.splice(i,1); //xoá 1 phần từ khỏi mảng
                saveToStorage('breedArr',breedArr);   // Lưu vào Storage
                renderTableBreed(breedArr);  // Render mảng ra trang;
                break;
            }
        }
    }
}


