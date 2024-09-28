'use strict';
// let x = "Kiểm tra hoạt động của Storages";
// console.log(x);
const saveToStorage = function (key,value){
    localStorage.setItem(key, value);
};
const getFrómtorage = function(key){
    return JSON.parse(localStorage.getItem(key));
};