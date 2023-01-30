//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.includes(bird))
};


gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// ANSWER:["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// ANSWER:["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
// ANSWER: []
