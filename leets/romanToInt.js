// https://leetcode.com/problems/roman-to-integer/


var romanToInt = function (s) {
  let number = 0
// loop through every charecter in the input string and check for the type of letter
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        // to check the following numeral as some charecters are dependent on the next letter i.e. IV = 4
        if (s[i + 1] === 'V') {
          number += 4
          i++
        } else if (s[i + 1] === 'X') {
          number += 9
          i++
        } else {
          number += 1
        }
        break;
      case 'V':
        number += 5
        break;
      case 'X':
        // to check the following numeral as some charecters are dependent on the next letter i.e. XL = 40
        if (s[i + 1] === 'L') {
          number += 40
          i++
        } else if (s[i + 1] === 'C') {
          number += 90
          i++
        } else {
          number += 10
        }
        break;
      case 'L':
        number += 50
        break;
      case 'C':
        // to check the following numeral as some charecters are dependent on the next letter i.e. CD = 400
        if (s[i + 1] === 'D') {
          number += 400
          i++
        } else if (s[i + 1] === 'M') {
          number += 900
          i++
        } else {
          number += 100
        }
        break;
      case 'D':
        number += 500
        break;
      case 'M':
        number += 1000
        break;
    }
  }
  return number
};
