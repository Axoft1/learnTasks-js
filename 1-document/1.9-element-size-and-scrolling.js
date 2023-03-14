// 1 Найти размер прокрутки снизу

// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2 Узнать ширину полосы прокрутки

// создадим элемент с прокруткой
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

console.log(scrollWidth);


// 3 Поместите мяч в центр поля

ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";


  // 4 В чём отличие CSS-свойств width и clientWidth

//   Отличия:

// clientWidth возвращает число, а getComputedStyle(elem).width – 
// строку с px на конце.

// getComputedStyle не всегда даст ширину, он может вернуть, к примеру, 
// "auto" для строчного элемента.

// clientWidth соответствует внутренней области элемента,
//  включая внутренние отступы padding, 
// а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.

// Если есть полоса прокрутки, и для неё зарезервировано место, 
// то некоторые браузеры вычитают его из CSS-ширины 
// (т.к. оно больше недоступно для содержимого), а некоторые – нет. 
// Свойство clientWidth всегда ведёт себя одинаково: 
// оно всегда обозначает размер за вычетом прокрутки, 
// т.е. реально доступный для содержимого.