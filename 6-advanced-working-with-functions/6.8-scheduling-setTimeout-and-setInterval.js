
// 1 Вывод каждую секунду
//Используя setInterval.

function printNumbers1(from, to) {
  let timerID = setInterval(function () {
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(timerID);
    }
  }, 1000);
}
//printNumbers1(7, 8);

//Используем рекурсивный setTimeout:
function printNumbers2(from, to) {
  setTimeout(function run() {
    if (from <= to) {
      console.log(from++);
      setTimeout(run, 1000);
    }
  }, 1000);
}
//printNumbers2(7, 18);


// 2 Что покажет setTimeout?

let i = 0;

setTimeout(() => alert(i), 100); // alert покажет 100000000 через 100мс

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}
// setTimeout выполнится после цикла

