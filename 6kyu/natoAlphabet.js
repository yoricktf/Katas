// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
  let answer = ''
  for (letter of words.toLowerCase().replace(/ /g, '')) {
    if (letter.match(/[,.!?]/)) {
      answer += letter + ' '
    } else {
      answer += NATO[letter] + ' '
    }
  }
  return answer.trim()
}
