function calculate(firstOperand, secondOperand, operator) {
  if (isNaN(firstOperand) || isNaN(secondOperand))
    return {
      firstOperand,
      secondOperand,
      operator,
      result: 'Input your operand or value first!',
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
        result:
          secondOperand !== 0
            ? firstOperand / secondOperand
            : 'ERROR: zero divisor value',
      };
    case '^':
      return {
        firstOperand,
        secondOperand,
        operator,
        result: Math.pow(firstOperand, secondOperand),
      };
    // No need default case. Cuz it's impossible for user to choose options other than provided ones
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

  resultElement.innerText = `${firstOperand} ${operator} ${secondOperand} = ${result}`;
}

function setOperandValueOnClear() {
  const firstOperand = document.getElementById('first-operand');
  const secondOperand = document.getElementById('second-operand');
  firstOperand.value = '';
  secondOperand.value = '';
}

function clearResult() {
  const resultElement = document.getElementById('result');
  resultElement.innerText = 'The calculation result will show up here';
  setOperandValueOnClear();
}

const sumButton = document.getElementById('operator-sum');
sumButton.addEventListener('click', function () {
  const firstOperand = getOperandValueByID('first-operand');
  const secondOperand = getOperandValueByID('second-operand');
  const result = calculate(firstOperand, secondOperand, '+');
  console.log(result);
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
