const fs = require('fs');
const helper = require('./../helper.js')

const input = helper.getInput('./../input.txt');
const half_circle = input.length/2;
let position, sum = 0;

for (let i = 0; i < input.length; i++) {

  if (i >= half_circle) {
    position = i - half_circle;
  } else {
    position = i + half_circle;
  }

  if (input[i] === input[position]) {
    sum += input[i];
  }

}

console.log("This is your captcha: " + sum);
