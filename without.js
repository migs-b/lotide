const without = function(source, dataToRemove) {
  let newArray = [];
  newArray = newArray.concat(source);
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < dataToRemove.length; y++) {
      if (newArray[x] === dataToRemove[y]) {
        newArray.splice(x, 1);
      }
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1, 2]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))
