const fs = require('fs');

let input = fs.readFileSync('./../input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let sum = 0;

const rows = input.split('\n'); // Split input into raws
for (row of rows) {
  const nums = row.split('\t'); // Split each raw into numbers
  const max = Math.max.apply(null, nums);
  const min = Math.min.apply(null, nums);
  const diff = max - min;
  sum += diff;
}

console.log("This is your captcha: \n" + sum);
