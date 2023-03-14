// 1 Почему не работает return false?

function handler() {
  alert("...");
  // использовать  event.preventDefault();
  return false;
}

// 2 Поймайте переход по ссылке

contents.onclick = function (event) {
  //console.log(event);
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }
  let target = event.target.closest("a");
  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute("href"));
  }
};

// 3 Галерея изображений

thumbs.onclick = function (event) {
  let thumbnail = event.target.closest("a");
  console.log(thumbnail);
  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};
function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
