class Calculator {
  constructor(_, _) {}

  clear() {}

  delete() {}

  appendNumber(_) {}

  chooseOperation(_) {}

  compute() {}

  getDisplayNumber(_) {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(_, _);

//listen to numbers

//listen to operations

//listen to equals

//listen to clear

//listen to delete
