// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// The return Will always be an integer so as the params.


function magNumber(info) {
  let bulletsNeeded = info[1] * 3
  let answer

  const requiredClips = (bulletsInClip) => {
    answer = Math.ceil(bulletsNeeded / bulletsInClip)
  }

  switch (info[0]) {
    case 'M4A1':
    case 'M16A2':
      requiredClips(30)
      break
    case 'PT92':
      requiredClips(17)
      break
    case 'PSG1':
      requiredClips(5)
      break
  }
  return answer
}
