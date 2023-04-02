"use strict";

// Обязателен ли "else"?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // будет рвботвть без условия else
    // ...
    return confirm("Родители разрешили?");
  }
}

// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
// 1 Используя оператор ?
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
// 2 Используя оператор ||
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// Функция min(a, b)

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Функция pow(x,n)

pow(3, 2) // = 3 * 3 = 9
pow(3, 3) // = 3 * 3 * 3 = 27
pow(1, 100) // = 1 * 1 * ...* 1 = 1

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("Введите значение x", "");
let n = prompt("Введите значение n", "");
if (n < 1) {
  console.log(`Не верное число ${n} используйте натуральное число`);
} else {
  console.log(pow(x, n));
}