// function letters(word) {
//   return word.split('');
// }

// function pigLatinizeWord(word) {
//   let chars = letters(word);
//   return chars.slice(1).join('') + chars[0] + 'ay';
// }

// function pigLatinizeSentence(sentence) {
//   return sentence.replace(/\w+/g, pigLatinizeWord);
// }

// console.log(pig latin);

// let string = 'this is all just gibberish';

// function pigLatin(str) {
//   return str.replace(/\b(\w)(\w+)\b/g, function(_a, b, c) {
//     if (/[A-Z]/.test(b)) {
//       c = c.replace(/^\w/, function(x) {
//         return x.toUpperCase();
//       });
//     }
//     return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
//   });
// }

// console.log(pigLatin(string));


javascript 
// Write a function to combine array into one string
const joinList = function(arr) {
  let str = "";
  //console.log(arr);
  for(let i = 0; i < arr.length; i++){
    str += arr[i] + " ";
    //console.log("string added ", str);
  }
  return str;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);


// 

const joinList = function(array) {
  let finalString ='';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1){
      finalString += array[i];
    }else {
      finalString += array[i] + ', ';
    }
  } 
  return finalString;
}