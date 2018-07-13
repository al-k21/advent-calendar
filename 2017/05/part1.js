const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let nums = input.split('\n'); // Create an array of raws
for (i in nums) { nums[i] = parseInt(nums[i]); } // Conver to integers

const length = nums.length;
let current = 0, count = 0;

do {

  if (nums[current] == 0) {
    nums[current] = nums[current] + 1;
  } else  {
    let value = nums[current];
    nums[current] = nums[current] + 1;
    current += value;
  }

  count++;

} while (current < length);

console.log("This is your captcha: " + count);
