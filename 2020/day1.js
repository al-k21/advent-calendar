const helper = require('./utils/helper_functions');

function part1(input) {
  for (x of input)
    for (y of input)
      if(x+y === 2020) return x*y;
  return null;
}

function part2(input) {
  for (x of input)
    for (y of input)
      for (z of input)
        if(x+y+z === 2020) return x*y*z
  return null;
}

const input = helper.processInput('day1').map(Number);

const part1_result = part1(input);
const part2_result = part2(input);

console.log("Day 1:");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
