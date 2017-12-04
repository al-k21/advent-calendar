const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let split_input= input.split(''); // Create an array of characters
split_input.push(split_input[0]); // Append first character to the end

let sum = 0;
for (var i = 0; i < split_input.length; i++) {
  if (split_input[i] == split_input[i+1]) {
    sum += parseInt(split_input[i]);
  }
}

console.log("This is your captcha: " + sum);
