// https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript
// figure out the total waiting time of all customers. there is a 2 minute machine cleaning period between customers.

function barista(coffees) {
  let totalWaitTime = []
  coffees.sort((a, b) => a - b)

  for (let [index, brewtime] of coffees.entries()) {
    totalWaitTime.push(index == 0 ? brewtime : totalWaitTime[index - 1] + brewtime + 2)
  }
  return totalWaitTime.reduce((a, b) => a + b, 0)
}
