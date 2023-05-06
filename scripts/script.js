function calculate(firstOperand, secondOperand, operator) {
  if (secondOperand === 0 && operator === '/')
    return {
      firstOperand,
      secondOperand,
      operator,
      result: 'ERROR: zero division value',
    };

  switch (operator) {
    case '+':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: firstOperand + secondOperand,
      };
    case '-':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: firstOperand - secondOperand,
      };
    case 'x':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: firstOperand * secondOperand,
      };
    case '/':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: firstOperand / secondOperand,
      };
    case '^':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: Math.pow(firstOperand, secondOperand),
      };
    default:
      return {
        firstOperand,
        secondOperand,
        operator,
        result: 'Please input your operands and operator',
      };
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

function updateResult(resultObject) {
  const resultElement = document.getElementById('result');
  const { firstOperand, secondOperand, operator, result } = resultObject;

  if (!firstOperand || !secondOperand)
    resultElement.innerText = 'Input your operands first!';
  else
    resultElement.innerText = `${firstOperand} ${operator} ${secondOperand} = ${result}`;
}

function clearResult() {
  const resultElement = document.getElementById('result');
  resultElement.innerText = '';
}

const sumButton = document.getElementById('operator-sum');
sumButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '+');
  updateResult(result);
});

const subtractButton = document.getElementById('operator-subtract');
subtractButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '-');
  updateResult(result);
});

const multiplyButton = document.getElementById('operator-multiply');
multiplyButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, 'x');
  updateResult(result);
});

const divisionButton = document.getElementById('operator-divide');
divisionButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '/');
  updateResult(result);
});

const powerButton = document.getElementById('operator-power');
powerButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '^');
  updateResult(result);
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  clearResult();
});
