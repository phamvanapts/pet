'use strict';
/** Kiểm tra hoạt động của script chưa//
alert("Kiểm tra hoạt động"); 
*/
/**
 * Mục 4
 * Tạo một biến global tên là petArr là một mảng lưu danh sách thú cưng
 */
const petArr = [];
/**
 * Mục 1
 * Lấy các DOM Element từ trang WEB
 */
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
/**
 * mục 3.
 * Hàm kiểm tra nhập liệu của người dùng 
 */
function checkInput(data){ 
if(data.id == ""){ //Kiểm tra trường id có rỗng không.
        alert(" Please, Input ID !");
        return false;
    }
    return true;
}
/**
 * Kiểm tra trường id không trùng.
 */
function checkUnique(id){
    for(let i = 0; i < petArr.length; i++){
        if(petArr[i].id = id){
            return false;
        }
        return true;
    }
}
/**
 * Kiểm tra giá trị nằm trong khoản
 */
function checkBetween(val, min, max){
    if(val >=min && val <= max){
        return true;
    }
    alert(`Age must between ${min} and ${max} !`);
    return false;
}

function validateData(data){

}
/**
 * Hàm lấy được thông tin từ nhấn vào nút Submit
 */
submitBtn.addEventListener('click',function(e){
    // alert("Kiểm tra hoạt động khi ấn SUBmit") ==> đã hoạt động
   /**
    * lấy dữ liệu từ các ô nhập.
    */ 
   const data = {
    id: this.idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    heathyPet:{
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked
    },
    date: new Date(),
   }
   // gọi hàm kiểm tra dữ liệu đầu vào.
   const validate = validateData(data);
   //nếu kiểm tra thoả điều kiện thì ghi dữ liệu.
   if(validate){
    petArr.push(data);
    // clearInput();
    // renderTableData(petArr);
   }
});