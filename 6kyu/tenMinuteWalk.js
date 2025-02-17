//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
//You always walk only a single block for each letter (direction) and you
//know it takes you one minute to traverse one city block, so create a function
//that will return true if the walk the app gives you will take you exactly ten
//minutes (you don't want to be early or late!) and will, of course, return you
//to your starting point. Return false otherwise.

function isValidWalk(walk) {
  const counter = {};
  walk.forEach((direction) => {
    counter[direction] ? (counter[direction] += 1) : (counter[direction] = 1);
  });

  if (
    walk.length === 10 &&
    counter?.n === counter?.s &&
    counter?.e === counter?.w
  ) {
    return true;
  }
  return false;
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
//'should return true'
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
//'should return false'
// isValidWalk(['w'])
//'should return false'
// isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
//'should return false'
