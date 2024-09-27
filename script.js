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
 * Khai báo đối tượng cho table chứa thú cưng.
 */
const tableBodyEl = document.getElementById("tbody");
/**
 * mục 3.
 * Hàm kiểm tra nhập liệu của người dùng 
 */
function checkInput(data){ 
    if(data.id == ""){ //Kiểm tra trường id có rỗng không.
        alert(" Please, Input ID !");
        return false;
    }
    // alert(" Có dữ liệu ID !");
    return true;
}
/**
 * Kiểm tra trường id không trùng.
 */
function checkUnique(id){
    // alert(" Hàm kiểm tra Trùng ID hay không!");
    if(petArr == 0) return true;
    // alert('Số phần tử mảng = '+ petArr.length);
    for(let i = 0; i < petArr.length; i++){
        // alert(`Kiểm  phần tử mảng = ${i}`);
        if(petArr[i].id == id){
            alert(` Trùng ID = ${id} !`);
            return false;
        }
        // alert(" Không trùng ID !");
    }
    return true;
}
/**
 * Kiểm tra giá trị nằm trong khoản.
 * hiện thông báo alert với trường cần kiểm tra.
 */
function checkBetween(name,val, min, max){
    if(val >=min && val <= max){
        // alert(`${name} đạt trong khoảng từ ${min} đến ${max} !`);
        return true;
    }
    alert(`${name} must between ${min} and ${max} !`);
    return false;
}
function checkType(name){
    if(name =="Select Type" || name =="Select Breed"){
        alert(`Please ${name}!`);
        return false;
    }
    return true;
}
/**
 * 3. Điều kiện khi nhập dữ liệu.
 * gọp nhiều điều kiện
 * 
 */
function validateData(data){
    // return true; // Tạm thời cho không kiểm tra để test các trường hợp khác
    if(checkInput(data) 
        && checkUnique(data.id) 
        && checkBetween("Age",data.age, 1, 15) 
        && checkBetween("Weight",data.weight, 1, 15) 
        && checkBetween("Length",data.length, 1, 100)
        && checkType(data.type)
        && checkType(data.breed))
        {
            return true;
    }
    return false;

}
/**
 * Hàm render các dòng HTML ra web.
 */
function renderTableData(petArr){
    tableBodyEl.innerHTML=""; //gán giá trị rỗng cho bảng.
    const check = 'bi bi-check-circle-fill';
    const noncheck = 'bi bi-x-circle-fill';
    for(let i = 0; i < petArr.length; i++){
        let pet = petArr[i];
        /**
         * đặt tên cho biến chứa các dòng HTML cần cho thể hiện tại giao diện 
         */ 
        const row = document.createElement('tr');
        row.innerHTML =`<th scope="row">${pet.id}</th>
                        <td>${pet.name}</td>
                        <td>${pet.age}</td>
                        <td>${pet.type}</td>
                        <td>${pet.weight}</td>
                        <td>${pet.length}</td>
                        <td>${pet.breed}</td>
                        <td>
                            <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                        </td>
                        <td><i class="${pet.heathyPet.vaccinated?check:noncheck}"></i></td>
                        <td><i class="${pet.heathyPet.dewormed?check:noncheck}"></i></td>
                        <td><i class="${pet.heathyPet.sterilized?check:noncheck}"></i></td>
                        <td>${pet.bmi}</td>
                        <td>${pet.date.toISOString().split('T')[0]}</td>
                        <td><button type="button" class="btn btn-danger" onclick="deletePet('${pet.id}')">Delete</button>
                        </td>`;
        tableBodyEl.appendChild(row);
    }
}
/**
 * Hàm xoá dữ liệu thú cưng
 */
const deletePet = (petID)=>{
    if(confirm('Bạn có muốn xoá không?')){
        for(let i = 0; i < petArr.length; i++){
            if(petArr[i].id==petID){
                // alert("Hello"); Hàm kiểm tra hoạt động code
                petArr.splice(i,1); //xoá 1 phần từ khỏi mảng
                break;
            }
        }
        renderTableData(petArr); //reder lại danh sách thú cưng.
    }
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
    id: idInput.value,
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
    bmi: '?'
   }
   // gọi hàm kiểm tra dữ liệu đầu vào.
   const validate = validateData(data);
   //nếu kiểm tra thoả điều kiện thì ghi dữ liệu.
    //    alert('Số phần tử mảng = '+ petArr.length);
    //    alert('Kiểm tra = '+ validate);
   if(validate){
    petArr.push(data);
    // nếu thoả điều kiện thú khoẻ mạnh.
    if(data.heathyPet.vaccinated && data.heathyPet.sterilized && data.heathyPet.dewormed){
        healthyPetArr.push(data); //ghi dữ liệu những thú cưng khoẻ mạnh
    }
    // clearInput();
    renderTableData(petArr); 
   }
   if(!validate) alert('Không thực hiện ghi dữ liệu');
});

/**
 * Mục 7: Hiển thị thú cưng khoẻ mạnh
 * Khi click vào button "healthy-btn" sẽ hiển thị thông tin
 * Thú cưng khoẻ mạnh khi cả 3 yc được checked.
 */
const healthybtn = document.getElementById('healthy-btn'); // tạo tên biến healthybtn
const healthyPetArr = []; // mảng chứ thú cưng khoẻ mạng đạt yêu cầu
let healthycheck = false; // Biến kiểm tra

healthybtn.addEventListener('click',function(){
    if(!healthycheck){
        renderTableData(healthyPetArr);
        healthybtn.innerHTML = "Show All Pet";
    }else{
        renderTableData(petArr);
        healthybtn.innerHTML = "Show HeathyPet Pet";
    }
    healthycheck = !healthycheck;
})
/**
 * 8. Tính BMI cho thú cưng
 * Công thức tính được cho sẵn
 */