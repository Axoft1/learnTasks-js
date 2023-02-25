"use strict";

// Можно ли добавить свойство строке?

let str = "Привет";
str.test = 5;
alert(str.test);// Ошибка (strict mode)
