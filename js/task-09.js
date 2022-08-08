function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorButton = document.querySelector('.change-color');
const span = document.querySelector('.color');
colorButton.addEventListener('click', () => {
  let bgColor = getRandomHexColor();
  document.body.style.backgroundColor = `${bgColor}`;
  span.textContent = `${bgColor}`;
});
