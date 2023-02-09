// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// List the sum of all natural numbers divisible by 3 & 5 and return the total
// if a number is divisible by both only return it once

function solution(number) {
  let answer = 0
  for (let i = 1; i < number; i++) {
    i % 3 === 0 || i % 5 === 0 ? answer += i : answer
  }
  return answer
}

solution(10)
// answer = 23
