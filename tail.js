const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(arr) {
//creating a new empty array to add only the item that we want
  let newArray = [];

  //starting the loop from index 1 because we want to ignore the first item in the array at index 0
  for (let index = 1; index < arr.length; index++) {
    //console.log(index)
    const item = arr[index];
    // console.log("This is a single item in my original array", item)
    newArray.push(item);
  }
  //tail should return everything but the first
  return newArray;
}

//const myOriginalArray = ["Hello", "Lighthouse", "Labs"]
//const result = tail(myOriginalArray);
//console.log(result)

//const expectedResult = ["Lighthouse", "Labs"]
//console.log(expectedResult)

//expected result has square brackets which means our tail function should return an array
//assertEqual(result, expectedResult);



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
