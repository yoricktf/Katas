//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
  const words = string.split(' ');
  const solution = [];
  for (let word of words) {
    word.length >= 5
      ? solution.push(word.split('').reverse().join(''))
      : solution.push(word);
  }
  return solution.join(' ');
}

spinWords('Welcome');
// "emocleW"
spinWords('Hey fellow warriors');
//"Hey wollef sroirraw"
spinWords('This is a test');
//"This is a test"
spinWords('This is another test');
//"This is rehtona test"
// spinWords("You are almost to the last test")
//   //"You are tsomla to the last test"
// spinWords("Just kidding there is still one more")
//   //"Just gniddik ereht is llits one more"
// spinWords("Seriously this is the last one")
//   //"ylsuoireS this is the last one"
