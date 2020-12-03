const helper = require('./utils/helper_functions');

function getTreesSum(x_iterator, y_iterator) {
  let x = (typeof y_iterator == "undefined" ) ? 0 : 1;
  let y = 0;
  let trees = 0;
  for (str of input) {
    if (typeof y_iterator == "undefined" ) {
      if (str.charAt(x) === "#") trees++
      x=x+x_iterator;
    } else {
      if (y%2 === 0 && y !== 0) {
        if (str.charAt(x) === "#") trees++
        x=x+x_iterator;
      }
      y++;
    }
  }
  return trees
}

function part1(input) {
  return getTreesSum(3)
}

function part2(input) {
  return getTreesSum(1)*getTreesSum(3)*getTreesSum(5)*getTreesSum(7)*getTreesSum(1,2)
}

const input = helper.processInput('day3');

const part1_result = part1(input);
const part2_result = part2(input);

console.log("Day 3:");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
