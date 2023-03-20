const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены!');
    return;
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  event.currentTarget.reset();
}
