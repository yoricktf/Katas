//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  let answer = [];
  let count = {};

  for (let number of arr) {
    if (!count[number]) count[number] = 0;
    if (count[number] < n) {
      answer.push(number);
      count[number] += 1;
    }
  }
  return answer;
}

deleteNth([20, 37, 20, 21], 1);
//[20,37,21])
