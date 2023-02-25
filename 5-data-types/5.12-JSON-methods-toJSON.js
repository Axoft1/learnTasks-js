"use strict";

// Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
  name: "Василий Иванович",
  age: 35,
};

let user2 = JSON.stringify(user);
let user3 = JSON.parse(user2);

// Исключить обратные ссылки

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/