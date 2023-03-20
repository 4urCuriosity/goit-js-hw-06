const inputEl = document.querySelector('input#validation-input');
const validationLengthValue = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const currentLengthValue = [...inputEl.value].length;

  if (currentLengthValue === validationLengthValue) {
    inputEl.classList.add('valid');
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    inputEl.classList.add('invalid');
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
  }
}
