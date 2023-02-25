"use strict";

// if (строка с нулём)

if ("0") {
  alert("Привет");
}// Выведется ли alert? да, т.к. "0" выдаст true

// Название JavaScript

let nameJs = prompt('Какое "официальное" название JavaScript?', "");
if (nameJs == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// Покажите знак числа

let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}
result = a + b < 4 ? "Мало" : "Много";

// Перепишите 'if..else' в '?'

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}
let newMessage =
  (login == "Сотрудник")
    ? "Привет"
    : (login == "Директор")
    ? "Здравствуйте"
    : (login == "")
    ? "Нет логина"
    : "";