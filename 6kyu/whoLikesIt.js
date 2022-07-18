// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// implement the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

function likes(names) {
  let numberOfNames = names.length
  let likeStatement = (numberOfNames < 2 ? ' likes this' : ' like this')

  if (numberOfNames === 0) {
    return 'no one likes this'
  } else if (numberOfNames >= 4) {
    // console.log('longernamehere')
    return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others${likeStatement}`
  }
  return names.reduce((name, nextName, i, array) => name + (i < array.length - 1 ? ', ' : ' and ') + nextName) + likeStatement
}
