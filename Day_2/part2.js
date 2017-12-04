const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let sum = 0;

const rows = input.split('\n'); // Split input into raws
for (row of rows) {

  const nums = row.split('\t'); // Split each raw into numbers
  for (num1 in nums) {
    num1 = nums[num1];
    for(num2 in nums)  {
      num2 = nums[num2];
      if (num1 % num2 === 0 && num1 != num2)  {
        const div = num1/num2;
        sum += div;
      }
    }
  }

}

console.log("This is your captcha: \n" + sum);
