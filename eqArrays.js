// const assertArraysEqual = function(arr1, arr2) {

//   let sample = eqArrays(arr1, arr2);

//   if (!sample) {
//     console.log("falseeee");
//   } else if (sample) {
//     console.log("trueeee");
//   }

// };

//tests
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
// assertArraysEqual([1, 2, 3], [1, 2, "3"]); //false
// // old function from a previous activity
// const eqArrays = function(arr1, arr2) {
//   let result = "true";

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       result = "false";
//     }
//   }

//   return result;
// };


const assertEqual = require("./assertEqual.js");

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length != arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;