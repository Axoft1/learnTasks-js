// 1 Можно ли "перевыполнить" промис?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

// Вывод будет: 1.
// Второй вызов resolve будет проигнорирован, 
//поскольку учитывается только первый вызов reject/resolve. 
//Все последующие вызовы – игнорируются.

// 2 Задержка на промисах

function delay(ms) {
  // ваш код
  return new Promise ( resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// 3 Анимация круга с помощью промиса

 function go() {
   showCircle(150, 150, 100).then((div) => {
     div.classList.add("message-ball");
     div.append("Hello, world!");
   });
 }
function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 3 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}

