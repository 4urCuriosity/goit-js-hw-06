const fontSizeControlEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

fontSizeControlEl.addEventListener('input', onValueChange);

function onValueChange() {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
}
