const fs = require('fs');

function getInput(file) {

  let input = fs.readFileSync(file, 'utf8');
  input = input.slice(0, input.length -1); // Delete new line character

  let split_input = input.split(''); // Create an array of characters

  // Conver an aray of string into an array of integers
  for (let i = 0; i < split_input.length; i++)  {
    split_input[i] = parseInt(split_input[i]);
  }

  return split_input;
}

module.exports = {
  getInput,
}
