
/*
Counting sheep

Consider an array/list of sheep where some sheep 
may be missing from their place. We need a function 
that counts the number of sheep present in the array (true means present).
*/
function countSheeps(sheep) {
    // TODO
    return sheep.filter(sh => sh == true).length;
  }

const sheep = [true, false, false, true, true];

console.log(countSheeps(sheep));

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

function boolToWord( bool ) {
    return bool ? "Yes" : "No";
  }

function highestRank(arr) {
  let map = new Map();
  for(let i = 0; i < arr.length; i++) {
    if(map.get(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let sorted = [...map.entries()].sort((a, b) => {
    if(b[1] > a[1]) {
        return 1;
    } else if (b[1] < a[1]) {
        return -1;
    } else {
        return b[0] - a[0];
    }
  });
  
  return sorted[0][0];
}