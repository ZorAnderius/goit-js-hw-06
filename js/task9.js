const chanheColorBtnEl = document.querySelector(".change-color");
const valueColorSpanEl = document.querySelector(".color");
const bodyEl = document.querySelector("#body-wrap");

chanheColorBtnEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const color = getRandomHexColor();
  valueColorSpanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
