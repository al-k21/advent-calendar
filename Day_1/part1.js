const fs = require('fs');
const helper = require('./helper.js')

let input = helper.getInput('./input.txt');

input.push(input[0]); // Append first character to the end

let sum = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i+1]) {
    sum += input[i];
  }
}

console.log("This is your captcha: " + sum);
