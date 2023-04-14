const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const valueFromRange = event.currentTarget.value;
  textEl.style.fontSize = `${valueFromRange}px`;
}
