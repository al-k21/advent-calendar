const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let count = 0;

let raws = input.split('\n'); // Create an array of raws
for (raw of raws) {
  let words = raw.split(' '); // Create an array of words
  hasDuplicates(words) ? 0 : count++;
}

console.log(count);

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
