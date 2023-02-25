"use strict";

// Деструктурирующее присваивание

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user
let { name, years: age, isAdmin = false } = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// Максимальная зарплата

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}