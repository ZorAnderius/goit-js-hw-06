const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onValideDate);

function onValideDate(event) {
  const value = event.currentTarget.value.length;
  const targetLength = event.currentTarget.dataset.length;
  if (value < targetLength) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
}
