const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const resultObj = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  if (resultObj.email === '' || resultObj.password === '') {
    return alert('Всі поля повинні бути заповнені!');
  }
  console.log(resultObj);
  event.currentTarget.reset();
}
