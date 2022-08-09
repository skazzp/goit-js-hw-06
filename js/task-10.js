function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const number = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
console.dir(number);
createBtn.addEventListener('click', () => {
  const divCount = +number.value;
  console.log(divCount);
  number.value = '';
  let size = 30;
  for (let i = 0; i < divCount; i += 1) {
    let color = getRandomHexColor();
    // const item = document.createElement("button");
    //     item.type = "button";
    //     item.dataset.color = color;
    //     item.style.backgroundColor = color;
    //     item.classList.add("item");
    //     items.push(item);
  }
});
