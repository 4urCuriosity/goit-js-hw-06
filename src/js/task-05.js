const inputEl = document.querySelector('input#name-input');
const nameOutputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onTextInput);

function onTextInput() {
  nameOutputEl.textContent = inputEl.value;

  if (inputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  }
}
