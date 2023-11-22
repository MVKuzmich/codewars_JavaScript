
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