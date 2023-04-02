"use strict";

// Сумма свойств объекта

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log( sumSalaries(salaries) ); // 650
function sumSalaries(salaries){
    let sum = 0
    for (let value of Object.values(salaries)) {
      sum += value
    }
    return sum
}

// Подсчёт количества свойств объекта

let user = {
  name: 'John',
  age: 30
};
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user)); // 2