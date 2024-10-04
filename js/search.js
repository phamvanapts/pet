'use strict';
/** Kiểm tra hoạt động của script chưa//
 alert("Kiểm tra hoạt động"); 
 */
/**
 * Tạo và gán các giá trị DOM 
 */
 const tableBodyEl = document.getElementById("tbody"); //giá trị tbody cần cho render bảng
 const sumPet = document.getElementById("sum-pet"); //giá trị tbody cần cho render bảng
 const findbtn = document.getElementById("find-btn"); //giá trị tbody cần cho render bảng
 const resetbtn = document.getElementById("reset-btn"); //giá trị tbody cần cho render bảng
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
 * Hàm render các dòng HTML ra web.
 */
function renderTableData(petArr){
    tableBodyEl.innerHTML=""; //gán giá trị rỗng cho bảng.
    if(petArr.length !=""){
        sumPet.innerHTML=`<h4>Có ${petArr.length} thú cưng.</h4>`;
    }else{
        sumPet.innerHTML=`<h4> Không có thú cưng nào tìm thấy.</h4>`;
    }
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
                        <td>${pet.date}</td>
                        </td>`;
        tableBodyEl.appendChild(row);
    }
}
renderTableData(petArr); // Hiển thị mảng petArr ra trang
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
    breedArr.forEach(function(breedItem){
        const option = document.createElement("option");
        option.innerHTML=`${breedItem.breed}`;
        breedInput.appendChild(option);
    });
}
renderBreed();
/**
 * Khi click button tìm kiếm
 */
findbtn.addEventListener('click',function(e){
    let petArrFind = petArr;    //tạo biến mảng petArrFind và gán giá trị bằng với petArr
    if(idInput.value){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.id.includes(idInput.value)); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(nameInput.value){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.name.includes(nameInput.value)); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(typeInput.value !== "Select Type"){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.type === typeInput.value); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(breedInput.value !== "Select Breed"){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.breed === breedInput.value); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(vaccinatedInput.checked === true){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.heathyPet.vaccinated === true); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(dewormedInput.checked === true){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.heathyPet.dewormed === true); //lọc giá trị idInput khi có giá trị 
        // alert(`Kiểm tra `);
    }
    if(sterilizedInput.checked === true){    //nếu idInput có giá trị thì
        petArrFind = petArrFind.filter((pet)=>pet.heathyPet.sterilized === true); //lọc giá trị idInput khi có giá trị 
    }
    renderTableData(petArrFind); // Hiển thị mảng petArrFind ra trang
    // alert(`Có ${petArrFind.length} thú cưng`);
})
/**
 * Trả về giá trị rỗng hoặc giá trị mặt định
 */
resetbtn.addEventListener('click',function(e){
    // alert("Kiểm tra nút");
    renderTableData(petArr);
    idInput.value = ""; 
    nameInput.value = "";
    typeInput.value == "Select Type";
    breedInput.value == "Select Breed";
    vaccinatedInput.checked = false;
    dewormedInput.checked = false;
    sterilizedInput.checked = false;
});