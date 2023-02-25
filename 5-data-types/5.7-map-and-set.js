"use strict";

//Фильтрация уникальных элементов массива

function unique(arr) {
    let set = new Set(arr);
 return set;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare,Krishna,:-O

// Отфильтруйте анаграммы

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// Перебираемые ключи

let map = new Map();
map.set("name", "John");
// let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
let keys = Array.from(map.keys());
keys.push("more");