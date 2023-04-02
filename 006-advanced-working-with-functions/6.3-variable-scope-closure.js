// 1 Независимы ли счётчики?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1

// они независимы

// 2 Объект счётчика

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter();

console.log(counter3.up()); // 1
console.log(counter3.up()); // 2
console.log(counter3.down()); // 1
//это будет работать

// 3 Функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

//sayHi(); // ошибка, sayHi() внутри if не видна

// 4 Сумма с помощью замыканий

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

// 5 Фильтрация с помощью функции

/* .. ваш код для inBetween и inArray */
function inBetween(a, b) {
  return function (x) {
    //console.log(x);
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

//
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1, 2


// 6 Сортировать по полю

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// по имени (Ann, John, Pete)
users.sort((a, b) => (a.name > b.name ? 1 : -1));
// по возрасту (Pete, Ann, John)
users.sort((a, b) => (a.age > b.age ? 1 : -1));

function byField(str) {
  return function (a, b) {
    //console.log(a,b);
    return a[str] > b[str] ? 1 : -1;
  };
}
console.log(users.sort(byField("age")));


// 7 Армия функций

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // функция shooter
      console.log(shooters.indexOf(shooter)); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
