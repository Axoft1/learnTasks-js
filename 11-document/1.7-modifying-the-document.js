// 1 createTextNode vs innerHTML vs textContent

// У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?
// 1 elem.append(document.createTextNode(text))
// 2 elem.innerHTML = text
// 3 elem.textContent = text
// 1 и 3  добавление text «как текст» в elem

// 2 Очистите элемент

let elem = document.querySelector("#elem");
console.log(elem);
function clear(elem) {
  elem.innerHTML = "";
}
clear(elem); // очищает список

// 3 Почему остаётся "aaa"?

// table1.remove();
//внутри <table> не может быть текста:
//в соответствии со спецификацией допускаются только табличные теги.
//Поэтому браузер показывает "aaa" до <table>.

// 4 Создайте список

let ul = document.createElement("ul");
document.body.append(ul);
//  while (true) {
//    let data = prompt("Введите текст для элемента списка", "");
//    if (!data) {
//      break;
//    }
//    let li = document.createElement("li");
//    li.textContent = data;
//    ul.append(li);
//  }

// 5 Создайте дерево из объекта

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let container = document.getElementById("container");
createTree(container, data);

function createTree(container, data) {
  let ul = document.createElement("ul");
  for (const key in data) {
    ul.insertAdjacentHTML("beforeend", `<li>${key}</li>`);
    if (JSON.stringify(data[key]) !== "{}") {
      createTree(ul.lastChild, data[key]);
    }
  }
  container.append(ul);
}

// 6 Выведите список потомков в дереве

let lists = document.querySelectorAll("li");
lists.forEach((list) => {
  let count = list.getElementsByTagName("li").length;
  if (!count) {
    return;
  }
  list.firstChild.textContent += `[${count}]`;
});

// 7 Создайте календарь в виде таблицы

function createCalendar(elem, year, month) {
  // ...ваш код...
  elem.insertAdjacentHTML(
    "beforeend",
    `<table>
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>`
  );
  let date = new Date(year, month - 1, 1);
  let day = date.getDay();
  let daysInMonth = new Date(year, month, 0).getDate();
  if (day === 0) {
    day = 7;
  }
  let k = 1;
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (j == day - 1 && k == 1) {
        let point = elem.querySelectorAll("tr")[i].querySelectorAll("td")[j];
        point.append(k);
        k++;
        continue;
      }
      if (k != 1) {
        let point = elem.querySelectorAll("tr")[i].querySelectorAll("td")[j];
        if (k > daysInMonth) {
          continue;
        }
        point.append(k);
        k++;
      }
    }
  }
}

createCalendar(calendar, 2012, 9);


// 8 Цветные часы с использованием setInterval

let timerId;

function clockStart() {
  // запустить часы
  timerId = setInterval(update, 1000);
  update(); // (*)
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}
function update() {
  let clock = document.getElementById("clock");
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  clock.children[2].innerHTML = seconds;
}


// 9 Вставьте HTML в список

one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");


// 10 Сортировка таблицы

// let tbody = document.querySelector("tbody");
// let arr = Array.from(tbody.children);

// tbody.innerHTML = "";

// arr.sort((a, b) => {
//   const textA = a.firstElementChild.textContent;
//   const textB = b.firstElementChild.textContent;

//   return textA > textB ? 1 : -1;
// });

// tbody.append(...arr);
let table = document.querySelector("#table");
console.log(table);
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) =>
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
  );

table.tBodies[0].append(...sortedRows);