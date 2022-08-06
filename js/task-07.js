const text = document.querySelector('#text');
const control = document.querySelector('#font-size-control');
control.addEventListener('change', () => {
  //   console.log(control.value);
  text.style.fontSize = control.value + 'px';
});
