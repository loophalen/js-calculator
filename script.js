class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const equalsButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-previoius-operand]");
const equalsButton = document.querySelector("[data-current-operand]");
