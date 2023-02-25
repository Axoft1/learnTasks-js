"use strict";

// Последнее значение цикла

let i = 3;
while (i) {
  aconsole.log(i--); // 3 , 2 , 1
}

// Какие значения выведет цикл while?

let j = 0;
while (++j < 5) console.log(j); // 1, 2, 3, 4
let k = 0;
while (k++ < 5) console.log(k); // 1, 2, 3, 4, 5

// Какие значения выведет цикл for?

for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// Выведите чётные числа

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Замените for на while

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}
let q = 0;
while (q < 3) {
  console.log(`number ${i}!`);
  q++;
}

// Повторять цикл, пока ввод неверен

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// Вывести простые числа

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
