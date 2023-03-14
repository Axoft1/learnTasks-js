"use strict";
// 1 Связанная функция как метод

function f() {
  console.log(this); // null при условии 'use strict'
}

let user = {
  g: f.bind(null),
};

user.g();

// 2 Повторный bind

function f2() {
  console.log(this.name);
}

f2 = f2.bind({ name: "Вася" }).bind({ name: "Петя" });

f2(); // Вася нельзя изменить существующую привязку

// 3 Свойство функции после bind

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // что выведет? почему?

// 4 Исправьте функцию, теряющую "this"

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

//askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));

// 5 Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user3 = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

//askPassword(user3.login.bind(user3, true), user3.login.bind(user3, false)); // ?

