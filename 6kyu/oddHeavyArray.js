// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
// write a function called isOddHeavy that accepts an integer array and returns true if the array is odd-heavy else return false.

function isOddHeavy(n) {
  let oddNumbers = []
  let evenNumbers = []
  n.filter(number => { number % 2 == 1 || number % 2 == -1 ? oddNumbers.push(number) : evenNumbers.push(number) })
  let smallestOdd = Math.min(...oddNumbers)
  let biggestEven = Math.max(...evenNumbers)
  if (smallestOdd === Infinity) {
    return false
  } else if (biggestEven === -Infinity) {
    return true
  }
  return smallestOdd > biggestEven ? true : false
}
