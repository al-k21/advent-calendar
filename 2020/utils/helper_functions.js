const fs = require('fs');

module.exports = {
  processInput
}

function processInput(day) {
  let input = fs.readFileSync(`./input/${day}.txt`, 'utf8');
  return input.slice(0, input.length -1).split('\n');
}
