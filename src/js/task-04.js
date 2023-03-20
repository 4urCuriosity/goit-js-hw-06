const counterValueEl = document.querySelector('span#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}
