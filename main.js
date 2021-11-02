const container = document.querySelector("div");

const equalButton = document.querySelectorAll("button")[0];

const clearButton = document.querySelectorAll("button")[1];

equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clear);

function calculate() {
  const firstNumber = document.querySelectorAll("input.numberInput")[0];
  const secondNumber = document.querySelectorAll("input.numberInput")[1];

  const operator = document.querySelector('input[name="operator"]:checked');

  calculator.enter(+firstNumber.value);
  calculator.enter(operator.value);
  calculator.enter(+secondNumber.value);

  const result = document.createElement("li");

  result.innerText = calculator.equal();

  result.className = "list-group-item";

  document.querySelector("ul").appendChild(result);

  calculator.reset();

  document.getElementById("calculatorForm").reset();
}

function clear() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  calculator.reset();
}
