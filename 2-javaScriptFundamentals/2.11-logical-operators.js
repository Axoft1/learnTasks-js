"use strict";

// Что выведет alert (ИЛИ)?

console.log(null || 2 || undefined); // 2

// Что выведет alert (ИЛИ)?

console.log(alert(1) || 2 || alert(3)); // сначала 1, затем 2

// Что выведет alert (И)?

console.log(1 && null && 2); // null

// Что выведет alert (И)?

console.log(alert(1) && alert(2)); // 1, а затем undefined

// Что выведет этот код?

console.log(null || (2 && 3) || 4); // 3

// Проверка значения из диапазона

if (age >= 14 && age <= 90);

// Проверка значения вне диапазона

if (age < 14 || age > 90);
if (!(age >= 14 && age <= 90));

// Вопрос об "if"

if (-1 || 0) console.log("first"); // true
if (-1 && 0) console.log("second"); // false
if (null || (-1 && 1)) console.log("third"); // true

// Проверка логина

let userName = prompt("Кто там?", "");

if (userName === "Админ") {
  let pass = prompt("Пароль?", "");

  if (pass === "Я главный") {
    alert("Здравствуйте!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

