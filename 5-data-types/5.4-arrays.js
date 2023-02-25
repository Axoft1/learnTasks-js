"use strict";

// Скопирован ли массив?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

// Операции с массивами

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

// Вызов в контексте массива

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // function(){alert( this );}

// Сумма введённых чисел

function sumInput() {
  let numbers = [];
  while (n) {
    let num = prompt("Введите число", 0);
    if (num === "" || num === null || !isFinite(num)) break;
    numbers.push(+num);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());

//Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let maxSum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let newSum = 0;
    for (let j = i; j < arr.length; j++) {
      newSum += arr[j];
      maxSum = Math.max(maxSum, newSum);
    }
  }
  return maxSum;
}