// 1  Добавьте пункт к выпадающему списку

for (const sel of document.querySelectorAll("option")) {
  if (sel.selected) console.log(sel.value, sel.text);
}
genres.insertAdjacentHTML(
  "beforeend",
  '<option value="classic">Классика</option>'
);
genres.selectedIndex = 2;