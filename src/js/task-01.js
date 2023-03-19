const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

console.log('1 вариант. Если мы знаем расположение элементов в разметке');

[...categoriesEl.children].forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// или же если мы не знаем порядок расположения элементов и нужен поиск по тегам

console.log('2 вариант. Если мы не знаем порядок расположения элементов и нужен поиск по тегам');

[...categoriesEl.children].forEach(item => {
  const categoryNameEl = item.querySelector('li h2');
  console.log(`Category: ${categoryNameEl.textContent}`);
  const categoryListEl = item.querySelector('li ul');
  console.log(`Elements: ${categoryListEl.children.length}`);
});
