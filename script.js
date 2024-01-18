"use strict";
const bodyElement = document.body;
const adv = document.querySelector(".adv");
const books = document.querySelector(".books");
const book = document.querySelectorAll(".book");
const bookHeaders = document.querySelectorAll("h2 > a");
const chaptersOfbook2 = book[0].querySelectorAll("li");
const chaptersOfbook5 = book[5].querySelectorAll("li");
const chaptersOfbook6 = book[2].querySelectorAll("li");

// Восстановить порядок книг.
books.append(book[2]);
books.prepend(book[1]);
book[3].before(book[4]);

// Заменить картинку заднего фона на другую из папки image
bodyElement.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Заменить картинку заднего фона на другую из папки image
bookHeaders[4].innerHTML = "Книга 3. this и Прототипы Объектов";

// Удалить рекламу со страницы
adv.remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
chaptersOfbook2[10].before(chaptersOfbook2[2]);
chaptersOfbook2[9].before(chaptersOfbook2[7]);
chaptersOfbook2[4].before(chaptersOfbook2[6], chaptersOfbook2[8]);

chaptersOfbook5[1].after(chaptersOfbook5[9]);
chaptersOfbook5[9].after(chaptersOfbook5[3], chaptersOfbook5[4]);
chaptersOfbook5[8].before(chaptersOfbook5[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
chaptersOfbook6[9].insertAdjacentHTML(
  "beforebegin",
  "<li>Глава 8: За пределами ES6</li>"
);
