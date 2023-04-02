"use strict";

// Можно ли добавить свойство строке?

let str = "Привет";
str.test = 5;
console.log(str.test);// Ошибка (strict mode)
