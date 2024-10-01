'use strict';
// /** Kiểm tra hoạt động của script chưa//
// alert("Kiểm tra hoạt động"); 
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
                        <td>${pet.date}</td>
                        <td><button type="button" class="btn btn-primary" onclick="editPet('${pet.id}')">Edit</button>
                        </td>`;
        tableBodyEl.appendChild(row);
    }
}
renderTableData(petArr);
/**
 * Hàm editPet(pet.id)
 * Khi click vào sẽ show id edit-pet
 * 
 */
const editPet = (petID)=>{
    if(confirm('Bạn có muốn xoá không?')){
        for(let i = 0; i < petArr.length; i++){
            if(petArr[i].id==petID){
                // alert("Hello"); Hàm kiểm tra hoạt động code
                petArr.splice(i,1); //xoá 1 phần từ khỏi mảng
                break;
            }
        }
        saveToStorage('petArr',petArr);
        renderTableData(petArr); //reder lại danh sách thú cưng.
    }
}