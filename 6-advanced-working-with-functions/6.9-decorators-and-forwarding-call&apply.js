// 1 Декоратор-шпион

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
function spy(func) {
  function cachingDecorator(...arg) {
    cachingDecorator.calls.push(arg);
    return func.apply(this, arg);
  }
  cachingDecorator.calls = [];
  return cachingDecorator;
}

// 2 Задерживающий декоратор

function f(x) {
  console.log(x);
}

// создаём обёртки
function delay(func, ms) {
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// 3 Декоратор debounce

function debounce(f, ms) {
  let time;
  return function () {
    if (Date.now() - time < ms) {
      return;
    }
    time = Date.now();
    f.call(this, ...arguments);
  };
}

let f2 = debounce(console.log, 1000);
f2(1); // выполняется немедленно
f2(2); // проигнорирован

setTimeout(() => f2(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f2(4), 1100); // выполняется
setTimeout(() => f2(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// 4 Тормозящий (throttling) декоратор

function f3(a) {
  console.log(a);
}
function throttle(func, ms) {
  let isReady = true;
  let tmp;

  return function (...args) {
    tmp = args;
    if (!isReady) return;
    isReady = false;
    func.apply(this, args);
    setTimeout(() => {
      isReady = true;
      func.apply(this, tmp);
    }, ms);
  };
}
// f1000 передаёт вызовы f максимум раз в 1001 мс
let f1001 = throttle(f3, 1001);

f1001(1); // показывает 1
f1001(2); // (ограничение, 1001 мс ещё нет)
f1001(3); // (ограничение, 1001 мс ещё нет)

// когда 1001 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
