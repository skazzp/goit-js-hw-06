const input = document.querySelector('#validation-input');
input.addEventListener('blur', event => {
  let inputValue = event.currentTarget.value;
  if (inputValue.length === 6) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
});
