
// 1 Изменяем "prototype"

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};         // true
// Rabbit.prototype.eats = false; // false
// delete rabbit.eats;            // true
// delete Rabbit.prototype.eats;  // undefined

console.log( rabbit.eats ); // true


// 2 Создайте новый объект с помощью уже существующего


function Rabbit2(name) {
  this.name = name;
  console.log(name);
}
//Rabbit2.prototype = {}; // после презаписи код не сработает
let obj = new Rabbit2("White Rabbit");
let obj2 = new obj.constructor();
