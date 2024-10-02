'use strict';
// /** Kiểm tra hoạt động của script chưa//
// alert("Kiểm tra hoạt động"); 
/**
 * Lấy các DOM Element từ trang WEB
 * đặt tên để dễ dàng lập trình
 */
const submitBtn = document.getElementById("submit-btn");     //khai báo biến là DOM của button Submit
const clearBtn = document.getElementById("clear-btn");     //khai báo biến là DOM của button Clear All
const hideBtn = document.getElementById("hide-btn");     //khai báo biến là DOM của button Clear All
const idInput = document.getElementById("input-id");         //biến là DOM của form ID
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
let showEditPet = false; // gán giá trị showEditPet là false ==> không hiện lên
const ngay = new Date().getDate();
const thang = new Date().getMonth()+1;
const nam = new Date().getFullYear();
const date = ngay+ "-"+thang+"-"+nam;
/**
 * Khi click vào Clear All các trường dữ liệu gán lại giá trị
 * Không gán cho trường ID
 */
clearBtn.addEventListener('click',function(e){
    // idInput.value = ""; //gán giá trị mảng cho form
    nameInput.value = ""; //gán giá trị mảng cho form
    ageInput.value = ""; //gán giá trị mảng cho form
    typeInput.value = "Select Type"; //gán giá trị mảng cho form
    weightInput.value = ""; //gán giá trị mảng cho form
    lengthInput.value = ""; //gán giá trị mảng cho form
    colorInput.value = ""; //gán giá trị mảng cho form
    vaccinatedInput.checked = ""; //gán giá trị mảng cho form
    dewormedInput.checked = ""; //gán giá trị mảng cho form
    sterilizedInput.checked = ""; //gán giá trị mảng cho form
    breedInput.value = "Select Breed";
});
/**
 * Click Hide form nhập đóng lại
 * Trước khi đóng, reset toàn bộ giá trị
 */
hideBtn.addEventListener('click',function(e){
    idInput.value = ""; //gán giá trị mảng cho form
    nameInput.value = ""; //gán giá trị mảng cho form
    ageInput.value = ""; //gán giá trị mảng cho form
    typeInput.value = "Select Type"; //gán giá trị mảng cho form
    weightInput.value = ""; //gán giá trị mảng cho form
    lengthInput.value = ""; //gán giá trị mảng cho form
    colorInput.value = ""; //gán giá trị mảng cho form
    vaccinatedInput.checked = ""; //gán giá trị mảng cho form
    dewormedInput.checked = ""; //gán giá trị mảng cho form
    sterilizedInput.checked = ""; //gán giá trị mảng cho form
    breedInput.value = "Select Breed"; 
    document.getElementById("edit-pet").style.display='none'; //Hide thông tin nhập thú cưng
})
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
                        <td><button type="button" class="btn btn-primary" onclick="editPet('${pet.id}')">
                            <i class="bi bi-pencil-square"></i></button>
                        </td>`;
        tableBodyEl.appendChild(row);
    }
}
renderTableData(petArr);
/**
 * bắt sự kiện khi ấn vào typeInput để chọn loại giống
 */
typeInput.addEventListener('click', renderBreed);
/**
 * Hàm hiển thị từng loại giống khi chọn typeInput
 * 
 */
function renderBreed(){
    breedInput.innerHTML = "<option>Select Breed</option>"; //gán giá trị breedInput bằng Select Breed
    //điều kiện nếu là Dog
    if(typeInput.value === "Dog"){
        //Đặt biến breedDogs lấy giá trị từ mảng breedArr
        const breedDogs = breedArr.filter((breedItem)=>breedItem.typebreed === "Dog");
        // console.log(breedDogs);
        breedDogs.forEach(function(breedItem){
            // alert("Kiểm tra")
            const option = document.createElement("option");      //khai báo biến option 
            option.innerHTML = `${breedItem.namebreed}`;          //gán giá trị cho option là mảng các namebreed
            breedInput.appendChild(option);                        //gán giá trị cho breedInput
        }//Kết thúc function
    );  //Kết thúc forEach
} else if(typeInput.value === "Cat"){  //điều kiện là Cat
    //đặt biến là mảng chứa các breed là Cad lấy giá trị từ breedArr
        const breedCats = breedArr.filter((breedItem)=>breedItem.typebreed ==="Cat");
        breedCats.forEach(function(breedItem){
            const option = document.createElement("option");    //khai báo biến option 
            option.innerHTML = `${breedItem.namebreed}`;         //gán giá trị cho option là mảng các namebreed
            breedInput.appendChild(option);                     //gán giá trị cho breedInput
        }//Kết thúc function
    ); //kết thúc forEach
    }//kết thúc If
}
/**
 * Hàm editPet(pet.id)
 * Khi click vào sẽ show id edit-pet
 * Đưa thông tin lên form
 */
const editPet = (petID)=>{      //Khi ấn nút Edit
    if(!showEditPet){   //Nếu showEditPet == true thì  
        document.getElementById("edit-pet").style.display='block'; //showform thông tin nhập thú cưng
        const pet = petArr.find((petItem) =>petItem.id == petID);
        idInput.value = pet.id; //gán giá trị mảng cho form
        nameInput.value = pet.name; //gán giá trị mảng cho form
        ageInput.value = pet.age; //gán giá trị mảng cho form
        typeInput.value = pet.type; //gán giá trị mảng cho form
        weightInput.value = pet.weight; //gán giá trị mảng cho form
        lengthInput.value = pet.length; //gán giá trị mảng cho form
        colorInput.value = pet.color; //gán giá trị mảng cho form
        vaccinatedInput.checked = pet.heathyPet.vaccinated; //gán giá trị mảng cho form
        dewormedInput.checked = pet.heathyPet.dewormed; //gán giá trị mảng cho form
        sterilizedInput.checked = pet.heathyPet.sterilized; //gán giá trị mảng cho form
        renderBreed();
        breedInput.value = `${pet.breed}`;
        // alert(pet.breed);
    }
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
 */
function validateData(data){
    // return true; // Tạm thời cho không kiểm tra để test các trường hợp khác
    if(    checkBetween("Age",data.age, 1, 15) 
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
 *  Dữ liệu lưu vào localStorage
 *  dữ liệu ghi vào PetArr ==> cập nhật lại
 *  Nếu dữ liệu nhập vào thoả điều kiện thì
 *   - Cập nhật lại giá trị của petArr theo đúng ID
 *   - 
 */
submitBtn.addEventListener('click',function(e){
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
        date: date,
        bmi: '?'
    }
    // gọi hàm kiểm tra dữ liệu đầu vào.
    const validate = validateData(data);
    //nếu kiểm tra thoả điều kiện thì ghi dữ liệu.
    if(validate){
        const index = petArr.findIndex((pet)=>pet.id === data.id);
        petArr[index] = data; 
        // nếu thoả điều kiện thú khoẻ mạnh.
        //    if(data.heathyPet.vaccinated && data.heathyPet.sterilized && data.heathyPet.dewormed){
            //        healthyPetArr.push(data); //ghi dữ liệu những thú cưng khoẻ mạnh
            //     }
            saveToStorage('petArr',petArr)     //Lưu vào localStorage 
            renderTableData(petArr);           // cập nhật lại danh sách thú cưng
            alert(`Đã cập nhật xong ${data.name}`);
            
   }
   if(!validate) alert('Không cập nhật. Sai dữ liệu');
})