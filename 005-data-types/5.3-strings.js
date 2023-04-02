"use strict";

// Сделать первый символ заглавным
ucFirst("вася") == "Вася";
function ucFirst (str) {
   let newStr = str.split('')
    newStr[1].toUpperCase().join("");
   return newStr.join("");
}

// Проверка на спам

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
}

// Усечение строки

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

//Выделить число
console.log( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
  return +str.slice(1);
}