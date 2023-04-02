"use strict";

// Создайте дату

let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

// Покажите день недели

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); 

// День недели в европейской нумерации

let date1 = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date1));
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

//Какой день месяца был много дней назад?

let date2 = new Date(2015, 0, 2);

console.log( getDateAgo(date2, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date2, 2) ); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

// Последнее число месяца?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

// Сколько сегодня прошло секунд?

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000); 
}
console.log(getSecondsToday());

// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

// Форматирование относительной даты

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "прямо сейчас";
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00
