let counterValue = 0;

const decrenentBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBrnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");

const counter = (event) => {
  const eventData = event.currentTarget.dataset.action;
  if (eventData === "increment") {
    counterValue++;
  } else if (eventData === "decrement") {
    counterValue--;
  }
  valueEl.textContent = counterValue;
};

decrenentBtnEl.addEventListener("click", counter);
incrementBrnEl.addEventListener("click", counter);
