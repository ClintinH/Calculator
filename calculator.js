// if final value is computed then delete should not be working
// if you choose and operand then choose another the operand does not change.

class Calculator {
  constructor(curDisplay, preDisplay) {
    this.currentDisplay = curDisplay;
    this.previousDisplay = preDisplay;
    this.clear();
  }

  clear() {
    //clear entire input
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    // delete last add number
    this.currentOperand = String(this.currentOperand).slice(0, -1);
  }

  appendNumber(number) {
    //prevent user from adding more than 1 . (dot)
    if (this.currentOperand.includes(".") && number === ".") return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") this.compute();
    this.previousOperand = this.currentOperand;
    this.operation = operation;
    this.currentOperand = "";
  }

  compute() {
    let result;
    let previous = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);

    switch (this.operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
  }

  getDisplayNumber(number) {
    return number;
  }

  updateDisplay() {
    this.currentDisplay.innerHTML = this.getDisplayNumber(this.currentOperand);
    this.previousDisplay.innerHTML = this.operation
      ? `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      : "";
  }
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

const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);

//listen to numbers
numberButtons.forEach((numButton) => {
  numButton.addEventListener("click", function (e) {
    calculator.appendNumber(e.target.innerText);
    calculator.updateDisplay();
  });
});
//listen to operations
operationButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    calculator.chooseOperation(e.target.innerText);
    calculator.updateDisplay();
  });
});
//listen to equals
equalsButton.addEventListener("click", function (e) {
  // operations that will calculate numbers into a total
  calculator.compute();
  calculator.updateDisplay();
});

//listen to clear
allClearButton.addEventListener("click", function (e) {
  // clear current input
  calculator.clear();
  calculator.updateDisplay();
});

//listen to delete
deleteButton.addEventListener("click", function (e) {
  //delete all data of whole operation
  calculator.delete();
  calculator.updateDisplay();
});
