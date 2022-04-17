// https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript

// Given a varying number of integer arguments, return the digits that are not present in any of them.
// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.


function unusedDigits(...arguments) {
  let controlDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let digits = arguments.join('')
  let answer = ""

  controlDigits.filter((number) => { !digits.includes(number) ? answer += number : '' })

  return answer;
}
