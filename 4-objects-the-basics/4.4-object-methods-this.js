"use strict";

// Использование "this" в литерале объекта
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат? - undefined

// Создайте калькулятор

let calculator = {
    a: 0,
    b: 0,
  read(){
    this.a = +prompt('Напишите певрое число', 0)
    this.b = +prompt('Напишите второе число', 0)
  },
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Цепь вызовов

let ladder = {
  step: 0,
  up () {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

