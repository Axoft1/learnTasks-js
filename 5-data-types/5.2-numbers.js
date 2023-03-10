"use strict";

//Сумма пользовательских чисел
let first = +prompt('Введите первое число', 0)
let second = +prompt('Введите первое число', 0)
console.log(first + second);

// Почему 6.35.toFixed(1) == 6.3?
console.log((6.35 * 10).toFixed(20));

// Ввод числового значения
function readNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));
  if (num === null || num === "") return null;
  return +num;
}
console.log(readNumber());

//Бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
  i += 0.2;
}
//Это происходит из-за потери точности, при прибавлении таких дробей как 0.2.

//Случайное число от min до max
console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Случайное целое число от min до max
console.log(randomInteger(1, 5)); // 1
console.log( randomInteger(1, 5) ); // 3
console.log(randomInteger(1, 5)); // 5

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}