// 1 Получите атрибут

let data = document.querySelector("[data-widget-name]");
console.dir(data);

// 2 Сделайте внешние ссылки оранжевыми

let links = document.querySelectorAll("a");

for (let link of links) {
  let href = link.getAttribute("href");
  console.log(href);
  if (!href) continue;
  if (!href.includes('://')) continue; 
  if (href.startsWith('http://internal.com')) continue; 
  link.style.color = 'orange';
}
