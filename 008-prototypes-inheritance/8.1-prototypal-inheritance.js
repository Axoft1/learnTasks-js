// 1 Работа с прототипами

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // null (2)

delete animal.jumps;

console.log(rabbit.jumps); // undefinde (3)

// 2 Алгоритм поиска

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
//Ответьте на вопрос: как быстрее получить значение glasses –
//через pockets.glasses или через head.glasses?
//Неважно, движок попросту запомнит где было это свойство и в следующий раз будет искать его там же

// 3 Куда будет произведена запись?

let animal2 = {
  eat() {
    this.full = true;
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.eat(); //  то что перед точкой - rabbit2

// 4 Почему наедаются оба хомяка?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
