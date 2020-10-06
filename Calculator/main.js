const keys = document.querySelector(".calculator-buttons");
const display = document.querySelector(".calculator-screen");
keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;
  const key = event.target;
  const keyValue = key.textContent;
  displayValue = display.textContent;

  if (key.classList.contains("number")) {
    if (displayValue === "0") {
      //Is this is a number key?
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }
  //Is this an operator key?
  if (key.classList.contains("operator")) {
    console.log(key);
  }
});
