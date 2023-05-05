function calculate(firstOperand, secondOperand, operator) {
  if (secondOperand === 0 && operator === '/')
    return 'Error: Zero value divisor';

  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    case '^':
      return Math.pow(firstOperand, secondOperand);
    default:
      break;
  }
}

/**
 * Get operand value of an element using its ID.
 * @param {string} elementID ID of the desired HTML element we want to get value from
 * @returns {number} Operand value in form of float.
 */

function getOperandValueByID(elementID) {
  const operandValue = document.getElementById(`${elementID}`).value;
  return parseFloat(operandValue);
}

function updateResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.innerText = result;
}

const sumButton = document.getElementById('operator-sum');
sumButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '+');
  updateResult(result);
});

// TODO: Fix refresh everytime button is clicked
