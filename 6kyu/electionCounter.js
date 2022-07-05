// https://www.codewars.com/kata/554910d77a3582bbe300009c/train/javascript
// Return the name of the winner. If there is no winner, return null.
// A name wins the election if it gets more than n/2 votes (n = number of all votes,
// i.e. n is equal to the size of the given list).

function getWinner(listOfBallots) {
  let talliedVotes = {}
  let numberOfVotes = listOfBallots.length
  let answer = ''

  for (element of listOfBallots) {
    if (element in talliedVotes) {
      talliedVotes[element] += 1
    } else {
      talliedVotes[element] = 1
    }
  }
  answer = Object.keys(talliedVotes).reduce((a, b) => talliedVotes[a] > talliedVotes[b] ? a : b);
  return (talliedVotes[answer] > numberOfVotes / 2 ? answer : null)
}
