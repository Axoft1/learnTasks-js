// 1 Установка и уменьшение значения счётчика

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = (value) => {
    counter.count = value;
  };
  counter.decrease = () => {
    counter.count--;
  };

  return counter;
}
let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
counter.set(9);
console.log(counter()); // 9
counter.decrease();
counter.decrease();
console.log(counter()); // 8

// 2 Сумма с произвольным количеством скобок

console.log(sum(1)(2)()); // 3
console.log( sum(5)(-1)(2)() ); // 6
console.log( sum(6)(-1)(-2)(-3)() ); // 0
console.log( sum(0)(1)(2)(3)(4)(5)() ); // 15

function sum(a) {
  let accumulator = a;
  function calc(b) {
    // console.log(b);
    if (arguments.length === 0) {
      return accumulator;
    }
    accumulator += b;
    return calc;
  }

  return calc;
}

