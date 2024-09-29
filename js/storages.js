'use strict';
/**
 * Tạo bộ dữ liệu cơ bản cho web
 * Dữ liệu sẽ được cập nhật vào petArr
*/
const data1 = {
    id: "P001",
    name: "Tom",
    age: 3,
    type: "Cat",
    weight: 5,
    length: 50,
    color: "#ffff",
    breed: "Ta",
    heathyPet: {
        vaccinated: "true",
        dewormed: "true",
        sterilized: "true",
    },
    date: "29-9-2024",
    bmi: "?"
}
/**
 * Tạo dữ liệu cho localStorage breeed
 */
const breed1 = {
    breed: "Mixed",
    type: "Dog"
}
const saveToStorage = function (key, value){
        localStorage.setItem(key, JSON.stringify(value));
};
const getFromStorage = function(key){
    return JSON.parse(localStorage.getItem(key));
};
/**
 * Lấy dữ liệu cho petArr
 * nếu chưa có Storage
*/
if (!getFromStorage("petArr")){
    saveToStorage('petArr',[data1]);
}
/**
 * Lấy dữ liệu từ Storage
*/
const petArr = getFromStorage("petArr");
// alert(petArr[0]);
/**
 * Gán dữ liệu cho breedArr
 * Nếu chưa có Storage
*/
if(!getFromStorage('breedArr')){
    saveToStorage('breedArr',[breed1]);
}
/**
 * Các Hàm định nghĩa Storage
 */
const breedArr = getFromStorage('breedArr');