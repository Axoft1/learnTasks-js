//Вычислить сумму чисел до данного

function sumTo2(n) {
  /*... ваш код ... */
  if (n == 1) {
    return 1;
  } else {
    return (n += sumTo(n - 1));
  }
}
function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo3(10)); // 5050
//P.S. Какой вариант решения самый быстрый?
//Самый медленный? Почему?
//решение по формуле работает быстрее всех. потому
//что оно использует всего три операции
//для любого n, а цикл и рекурсия требуют
//как минимум n операций сложения.

//Вариант с циклом
// быстрее рекурсии, так как операций
// сложения столько же, но нет дополнительных
// вычислительных затрат на организацию вложенных
// вызовов.

//P.P.S. Можно ли при помощи рекурсии посчитать
//sumTo(100000)? нельзя, ошибка, превышен максимальный
// размер стека

//Вычислить факториал

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120

//Числа Фибоначчи

function fib(n) {
  let result = number(1, 1, n);

  function number(first, second, n) {
    if (n === 2 || n === 1) {
      return second;
    } else {
      return number(second, first + second, n - 1);
    }
  }

  return result;
}
console.log(fib(7));

//5 Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList1(list) {
  console.log(list.value);
  if (list.next) {
    printList1(list.next);
  }
}
printList2(list);

function printList2(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// 6 Вывод односвязного списка в обратном порядке

printList1Revers(list)

function printList1Revers(list) {
  if (list.next) {
    printList1Revers(list.next);
  }
  console.log(list.value);
}

function printList2Revers(list) {
  let tmp = list;
  let newList = { value: tmp.value, next: null };
  tmp = tmp.next;

  while (tmp) {
    newList = { value: tmp.value, next: newList };
    tmp = tmp.next;
  }
  while (newList) {
    console.log(newList.value);
    newList = newList.next;
  }
}
