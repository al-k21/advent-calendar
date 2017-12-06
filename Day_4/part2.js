const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let count = 0;
let raws = input.split('\n'); // Create an array of raws

for (raw of raws) {
  words = raw.split(' '); // Create an array of words
  for (i in words) { words[i] = words[i].split('').sort().join(''); } // Sort each word
  if (!hasDuplicates(words)) { count++; } // Increment if no duplicates in the array
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

console.log("This is your captcha: " + count);
