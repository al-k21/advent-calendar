const fs = require('fs');

module.exports = {
  processInput,
  readInput
}

function processInput(day) {
  let input = readInput(day);
  return input.slice(0, input.length -1).split('\n');
}

function readInput(day) {
  return fs.readFileSync(`./input/${day}.txt`, 'utf8'); 
}
