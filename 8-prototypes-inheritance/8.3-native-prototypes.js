
// 1 Добавить функциям метод "f.defer(ms)"

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
function f() {
  alert("Hello!");
}

//f.defer(1000); // выведет "Hello!" через 1 секунду


// 2 Добавьте функциям декорирующий метод "defer()"

Function.prototype.defer = function (ms) {  
  return function (...argument) {
    setTimeout( function ()  {
        f2.apply(this, argument);
    }, ms);
  };
};
function f2(a, b) {
  console.log( a + b );
}

f2.defer(1000)(1, 2); // выведет 3 через 1 секунду.
