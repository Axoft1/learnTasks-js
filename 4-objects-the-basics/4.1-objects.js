"use strict";

// Привет, object

// 1 Создайте пустой объект user.
// 2 Добавьте свойство name со значением John.
// 3 Добавьте свойство surname со значением Smith.
// 4 Измените значение свойства name на Pete.
// 5 Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Проверка на пустоту

function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// Объекты-константы?

const user = {
  name: "John",
};
// это будет работать?
user.name = "Pete";
// Да, будет работает

// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

