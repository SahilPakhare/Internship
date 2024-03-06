 
let operand1 = '';
let operand2 = '';
let operator = '';
let currentDisplay = '';

function appendNumber(number) {
  if (operator) {
    operand2 += number;
    currentDisplay = operand1 + ' ' + operator + ' ' + operand2;
  } else {
    operand1 += number;
    currentDisplay = operand1;
  }
  document.getElementById('display').value = currentDisplay;
}

function setOperator(op) {
  if (!operand1) {
    return;
  }
  operator = op;
  currentDisplay += ' ' + operator;
  document.getElementById('display').value = currentDisplay;
}

function calculate() {
  if (!operator || !operand2) {
    return;
  }
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      if (parseFloat(operand2) === 0) {
        return;
      }
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      return;
  }
  currentDisplay = result.toString();
  operand1 = currentDisplay;
  operand2 = '';
  operator = '';
  document.getElementById('display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  operand1 = '';
  operand2 = '';
  operator = '';
  document.getElementById('display').value = currentDisplay;
}