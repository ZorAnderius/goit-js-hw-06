const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", onAddTextInput);

function onAddTextInput(event) {
  let name = event.currentTarget.value;
  if (name === "") {
    name = "Anonymous";
  }

  spanEl.textContent = name;
}
