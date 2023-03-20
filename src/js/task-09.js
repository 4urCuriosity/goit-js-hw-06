const bodyEl = document.querySelector('body');
const colorNameEl = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', onClickChangeColorBtn);

function onClickChangeColorBtn() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  colorNameEl.textContent = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
