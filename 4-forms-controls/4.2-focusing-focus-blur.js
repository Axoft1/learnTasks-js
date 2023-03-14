// 1 Редактируемый div

let viewEl = document.getElementById("view");
viewEl.tabIndex = 0; /* возможность получения собьітия focus */

let textareaEl1 = document.createElement("textarea");
textareaEl1.classList.add("edit");

viewEl.addEventListener("focus", function (event) {
  /* при фокусировке замена на textarea */ textareaEl1.value = viewEl.innerHTML;
  viewEl.replaceWith(textareaEl1);
  textareaEl1.focus();
});

textareaEl1.addEventListener("blur", function (event) {
  /* при уходе фокуса замена на view */ viewEl.innerHTML = textareaEl1.value;
  textareaEl1.replaceWith(viewEl);
});

textareaEl1.onkeydown = function (event) {
  /* добавим собьітие для 'Enter' */
  if (event.key == "Enter") {
    this.blur();
  }
};

// 2 Редактирование TD по клику

let table = document.getElementById("bagua-table");
let textareaEl; // хранение временного редактируемого єлемента <textarea>

table.addEventListener("click", function (event) {
  if (textareaEl)
    return; /* уже редактируется - не реагировать на клики на table */

  let td = event.target.closest("TD");
  if (!td || !table.contains(td)) return; /* если клик не внутри td */

  textareaEl = createTextarea(td);

  let buttonOK = createButtonOK(textareaEl);

  let buttonRes = createButtonRes(textareaEl, buttonOK);

  finalEdit(buttonOK, buttonRes, td);
  finalEdit(buttonRes, buttonOK, td);
});

function createTextarea(elemTD) {
  textareaEl = document.createElement("textarea");
  textareaEl.classList.add("edit");
  textareaEl.value = elemTD.innerHTML;
  textareaEl.style.width = elemTD.clientWidth + "px"; // подгоняем габаритьі textarea
  textareaEl.style.height = elemTD.clientHeight + "px";
  elemTD.replaceWith(textareaEl); /* textarea  вместо td */
  textareaEl.focus();
  return textareaEl;
}

function createButtonOK(elemTextarea) {
  let buttonOK = document.createElement("button");
  buttonOK.classList.add("ok");
  buttonOK.innerHTML = "OK";
  document.body.append(buttonOK);
  buttonOK.style.top =
    elemTextarea.getBoundingClientRect().bottom -
    1 +
    "px"; /* buttonOK подвяжем к textarea */
  buttonOK.style.left =
    elemTextarea.getBoundingClientRect().left +
    elemTextarea.clientWidth / 2 -
    buttonOK.clientWidth +
    "px";
  return buttonOK;
}

function createButtonRes(elemTextarea, buttOK) {
  let buttonRes = document.createElement("button");
  buttonRes.classList.add("res");
  buttonRes.innerHTML = "Отмена";
  document.body.append(buttonRes);
  buttonRes.style.top =
    elemTextarea.getBoundingClientRect().bottom -
    1 +
    "px"; /* buttonRes подвяжем к textarea и buttonOK */
  buttonRes.style.left = buttOK.getBoundingClientRect().right + "px";
  return buttonRes;
}

function finalEdit(button1, button2, Eltd) {
  button1.onclick = () => {
    if (button1.innerHTML == "OK") {
      Eltd.innerHTML = textareaEl.value;
    }
    textareaEl.replaceWith(Eltd);
    button1.remove();
    button2.remove();
    textareaEl =
      null; /* удаляем текущий textareaEl для возм редактирования новой td */
  };
}


// 3 Мышь, управляемая клавиатурой

mouse.tabIndex = 0;

mouse.onclick = function () {
  this.style.left = this.getBoundingClientRect().left + "px";
  this.style.top = this.getBoundingClientRect().top + "px";

  this.style.position = "fixed";
};

mouse.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      this.style.left = parseInt(this.style.left) - this.offsetWidth + "px";
      return false;
    case "ArrowUp":
      this.style.top = parseInt(this.style.top) - this.offsetHeight + "px";
      return false;
    case "ArrowRight":
      this.style.left = parseInt(this.style.left) + this.offsetWidth + "px";
      return false;
    case "ArrowDown":
      this.style.top = parseInt(this.style.top) + this.offsetHeight + "px";
      return false;
  }
};
