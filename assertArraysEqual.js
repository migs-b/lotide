const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const without = funtion(data, dataToRemove) {
  let dataWithout = [];
dataWithout = dataWithout.concat(data);
for (let i = 0; i < data.length; i++) {
  for (let x = 0; x < dataToRemove.length; x++) {
    if (dataWithout[i] === dataToRemove[x]) {
      dataWithout.splice(i, 1);
    }
  }
}
return dataWithout;
};

assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);

