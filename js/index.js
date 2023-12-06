
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

/* that given two numbers representing the numerator and denominator of a fraction, return the fraction in string format. 
If the fractional part has repeated digits, replace those digits with a single digit in parentheses.

repeatingFractions(1,1) === '1'
repeatingFractions(1,3) === '0.(3)'
repeatingFractions(2,888) === '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'
*/ 

function checkNumber(str) {
  let regexPattern = /^-?[0-9]+$/;
  // check if the passed number is integer or float
  return regexPattern.test(str);
}

function repeatingFractions(numerator, denominator) {

  let result = numerator / denominator;
  
  if(checkNumber(result)) {
    
    return result.toString();
  } else {
    let resultStr = result.toString();
    const start = resultStr.slice(0, resultStr.indexOf('.') + 1);
    
    return start.concat(resultStr.slice(resultStr.indexOf('.') + 1).replaceAll(/(.)\1+/g, '($1)'));
  }
}

console.log(repeatingFractions(2, 888));

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  let result = '';
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i = 0; i < text.length; i++) {
    let symbol = text[i].toUpperCase();
    if(alphabet.indexOf(symbol) > 0) {
      const ind = +alphabet.indexOf(symbol);
      result += ind + 1;
      if(i !== text.length - 1) {
        result += ' ';
      }
    }
  }
  return result.trim();
}

console.log(alphabetPosition("The narwhal bacons at midnight."));

/*
Return the century of the input year. 
The input will always be a 4 digit string, so there is no need for validation.
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

*/

function whatCentury(year) {
  let century = (year % 100 === 0) ? (year / 100) : Math.ceil(year / 100);
  // code must go here
  return addSuffix(century);
}

function addSuffix(century) {
  const j = century % 10;
  const k = century % 100;
  if (j == 1 && k != 11) {
    return `${century}st`;
  } else if (j == 2 && k != 12) {
    return `${century}nd`;
  } else if (j == 3 && k != 13) {
    return `${century}rd`;
  } else {
    return `${century}th`;
  }
}

console.log(whatCentury(1234));

/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters 
from each string in the array.
For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

*/
let arr = ["abracadabra","allottee","assessee"];
function dup(s) {

  return s.map(word => word.replace(/(.)\1+/g, '$1'));
  //..
  };

  console.log(dup(arr));

  /*
    Implement the function unique_in_order which takes as argument a sequence and returns 
    a list of items without any elements with the same value next to each other and preserving the original order of elements.

    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  */

    let str = 'AAAABBBCCDAABBB';
    var uniqueInOrder=function(iterable){
      let str = typeof(iterable) !== 'string' ? iterable.join('') : iterable;
      //your code here - remember iterable can be a string or an array
      return str.replace(/(.)\1+/g, '$1').split('');
    
    }

    console.log(uniqueInOrder(str));

/*
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
*/
    function digPow(n, p){
      // ...
      let powSum = 0;
      n.toString().split('')
      .map(num => +num)
      .forEach(number => {
        powSum += Math.pow(number, p);
        p++;
      });
    return Number.isInteger(powSum / n) ? powSum / n : -1;
    }

    console.log(digPow(695, 2));