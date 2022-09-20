// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // console.log("This is the actual value", actual)
  // console.log("This is the expected", expected)
  if (actual === expected) {
    // This happens only if item 1 equals item 2
    // Assertion Passed: [actual] === [expected]
    // Assertion Passed: apple === apple
    // Assertion Passed: 1 === 1
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    // This happens if item 1 does not equal item 2
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
console.log("test number 1");
assertEqual("Lighthouse Labs", "Bootcamp");

console.log("test number 2");
assertEqual(1, 1);

/* ;
assertEqual is to show that your first 'actual' value should equal your 'expected' value. IF it does not equal, then assertion failed.
*/
