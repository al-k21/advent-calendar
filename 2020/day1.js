const fs = require('fs');
const helper = require('./utils/helper_functions');

function part1() {
  for (x of rows)
    for (y of rows)
      if(x+y === 2020) return x*y;
  return null;
}

function part2() {
  for (x of rows)
    for (y of rows)
      for (z of rows)
        if(x+y+z === 2020) return x*y*z
  return null;
}

const rows = helper.processInput('day1').map(Number);
const part1_result = part1(rows);
const part2_result = part2(rows);

console.log("Day 1:");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
