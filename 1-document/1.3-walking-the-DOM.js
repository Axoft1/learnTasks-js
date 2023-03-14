"use strict";
// 1 Дочерние элементы в DOM

// Напишите код, как получить…
// элемент <div>?
console.log(document.body.firstElementChild);
/* <ul>? */
console.log(document.body.lastElementChild);
// второй <li> (с именем Пит)?
console.log(document.body.lastElementChild.lastElementChild);

// 2 Вопрос о соседях

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null? // да
// Правда, что elem.children[0].previousSibling всегда равен null ? // нет

// 3 Выделите ячейки по диагонали

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}