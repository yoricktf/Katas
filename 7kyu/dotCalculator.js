// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

// write a calculator that receives strings for input. The dots will represent the number in the equation.
// There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space. i.e.("..... - ..." => "..")

function dotCalculator(equation) {
  let firstNumber = equation.indexOf(' ')
  let secondNumber = equation.length - (equation.indexOf(' ', firstNumber + 1) + 1)
  let multiplier = equation.match(/\/\/|\*|-|\+/g)[0]

  switch (multiplier) {
    case '//':
      return '.'.repeat(firstNumber / secondNumber)
      break;
    case '*':
      return '.'.repeat(firstNumber * secondNumber)
      break;
    case '-':
      return '.'.repeat(firstNumber - secondNumber)
      break;
    case '+':
      return '.'.repeat(firstNumber + secondNumber)
      break;
  }
}
