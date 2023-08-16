function greetUser(name) {
  return `Hello, ${name}`
}
console.log(greetUser('Nureles'))

//====================================================

const numbers = [43, 9.99, 91, 72, 3]

function iterator(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
  return ''
}

console.log(iterator(numbers))

//====================================================

function calculator(firstNumber, operator, secondNumber) {
  switch (operator) {
    case 'plus':
      return firstNumber + secondNumber
    case 'minus':
      return firstNumber - secondNumber
    case 'multiplied by':
      return firstNumber * secondNumber
    case 'divided by':
      return firstNumber / secondNumber
  }
}

console.log(calculator(2, 'multiplied by', 3))