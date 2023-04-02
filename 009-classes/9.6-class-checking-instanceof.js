// 1 Странный instanceof

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true

//instanceof не учитывает саму функцию при проверке, 
//а только prototype, который проверяется на совпадения в прототипной цепочке.