const ref = {
  inputEl: document.querySelector("#controls input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

ref.createBtnEl.addEventListener("click", onCreateBoxes);
ref.inputEl.addEventListener("input", () => {});
ref.destroyBtnEl.addEventListener("click", destroyBoxes);

function onCreateBoxes(event) {
  const amount = ref.inputEl.value;
  createBoxes(amount);
}

let switcher = false;

function createBoxes(amount) {
  if (switcher) {
    return;
  }
  let size = 0;
  const boxArr = [];
  for (let index = 0; index < amount; index++) {
    const boxDivEl = document.createElement("div");
    boxDivEl.classList.add("box");
    size += 10;
    boxDivEl.style.width = `${size}px`;
    boxDivEl.style.height = `${size}px`;
    boxDivEl.style.backgroundColor = getRandomHexColor();
    boxArr.push(boxDivEl);
  }
  ref.boxesEl.append(...boxArr);
  switcher = true;
}

function destroyBoxes() {
  ref.boxesEl.innerHTML = "";
  switcher = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
