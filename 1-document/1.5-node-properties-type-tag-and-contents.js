
// 1 Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let li = document.querySelectorAll('li')
console.log(li.length);
li.forEach((e)=>{    
    console.log(e.firstChild.data); 
    console.log();
})


// 2 Что содержит свойство nodeType?
{/* <html>

<body>
  <script>
    alert(document.body.lastChild.nodeType); // 1
  </script>
</body>

</html> */}


// 3 Тег в комментарии

let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  console.log(body.firstChild.data); // BODY


// 4 Где в DOM-иерархии "document"?
console.log(document); // [object HTMLDocument]
// Объектом какого класса является document?
// document – объект класса HTMLDocument
// Какое место он занимает в DOM-иерархии?
// Наследует ли он от Node или от Element, или может от HTMLElement?
console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
