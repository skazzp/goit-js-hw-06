let counterValue = 0;

let incrementButton = document.querySelector('[data-action="increment"]');
let decrementButton = document.querySelector('[data-action="decrement"]');
let value = document.querySelector('#value');
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
