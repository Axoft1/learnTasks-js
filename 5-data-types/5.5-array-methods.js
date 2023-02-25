"use strict";

// Переведите текст вида border-left-width в borderLeftWidth

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
function camelize(str) {
  return str
    .split("-") 
    .map(
        (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); 
}

// Фильтрация по диапазону

function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); 
console.log( arr ); 

// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}
let newArr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
console.log( arr ); 

// Сортировать в порядке по убыванию

let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
console.log();(arr1);

// Скопировать и отсортировать массив

function copySorted(arr) {
  return arr.slice().sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
console.log(sorted);
console.log(arr2);

// Создать расширяемый калькулятор

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
console.log( names ); 

// Трансформировать в объекты

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya, petya, masha ];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped[0].id )
console.log( usersMapped[0].fullName ) 

// Отсортировать пользователей по возрасту

function sortByAge(arr3) {
  arr3.sort((a, b) => a.age > b.age ? 1 : -1);
}
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };
let arr3 = [ vasya, petya, masha ];
sortByAge(arr3);
console.log(arr3[0].name);
console.log(arr3[1].name); 
console.log(arr3[2].name); 

// Перемешайте массив

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr4 = [1, 2, 3];
shuffle(arr);
console.log(arr);

// Получить средний возраст

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr5 = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // 28

// Оставить уникальные элементы массива

function unique(arr) {
  return Array.from(new Set(arr));
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
console.log( unique(strings) ); 

// Создайте объект с ключами из массива

let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
let usersById = groupById(users2);
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}