// 1 Найдите координаты точек относительно окна браузера

document.onclick = function (e) {
  // показывает координаты точки клика
  coords.innerHTML = e.clientX + ":" + e.clientY;
};
//Внешние углы
// let coords = elem.getBoundingClientRect();
let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

//Верхний левый внутренний угол
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

//Нижний правый внутренний угол
let answer4 = [
  coords.right - parseInt(getComputedStyle(field).borderRightWidth),
  coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth),
];

// 2 Покажите заметку рядом с элементом

// function positionAt(anchor, position, elem) {
//   let anchorCoords = anchor.getBoundingClientRect();

//   switch (position) {
//     case "top":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//       break;

//     case "right":
//       elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;

//     case "bottom":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//       break;
//   }
// }

// function showNote(anchor, position, html) {
//   let note = document.createElement("div");
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// let blockquote = document.querySelector("blockquote");

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// 3 Покажите заметку около элемента (абсолютное позиционирование)

//  function getCoords(elem) {
//    let box = elem.getBoundingClientRect();

//    return {
//      top: box.top + pageYOffset,
//      left: box.left + pageXOffset,
//    };
//  }

//  function positionAt(anchor, position, elem) {
//    let anchorCoords = getCoords(anchor);

//    switch (position) {
//      case "top":
//        elem.style.left = anchorCoords.left + "px";
//        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//        break;

//      case "right":
//        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//        elem.style.top = anchorCoords.top + "px";
//        break;

//      case "bottom":
//        elem.style.left = anchorCoords.left + "px";
//        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//        break;
//    }
//  }

//  function showNote(anchor, position, html) {
//    let note = document.createElement("div");
//    note.className = "note";
//    note.innerHTML = html;
//    document.body.append(note);

//    positionAt(anchor, position, note);
//  }

//  // проверка
//  let blockquote = document.querySelector("blockquote");

//  showNote(blockquote, "top", "note above");
//  showNote(blockquote, "right", "note at the right");
//  showNote(blockquote, "bottom", "note below");

// 4 Расположите заметку внутри элемента (абсолютное позиционирование)

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {
  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      elem.style.width = "150px";
      elem.style.left =
        anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top =
        anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");
