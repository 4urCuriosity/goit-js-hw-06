function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesOutputEl = document.querySelector('div#boxes');

createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(inputValueEl.value);
}

function onDestroyBtnClick() {
  boxesOutputEl.innerHTML = '';
}

function createBoxes(amount) {
  onDestroyBtnClick();
  let initialBoxSize = 20;
  for (let i = 0; i < amount; i += 1) {
    initialBoxSize += 10;
    const boxToCreate = document.createElement('div');
    boxToCreate.style.background = getRandomHexColor();
    boxToCreate.style.width = `${initialBoxSize}px`;
    boxToCreate.style.height = `${initialBoxSize}px`;

    boxesOutputEl.append(boxToCreate);
  }
}
