const fs = require('fs');

function processInput() {
  let input = fs.readFileSync('./input.txt', 'utf8');
  input = input.slice(0, input.length -1).split('\n');
  let rows = [];
  for (i of input) rows.push(parseInt(i));
  return rows;
}

function part1() {
  for (x of rows)
    for (y of rows)
      if(x+y == 2020) return x*y;
  return null;
}

function part2() {
  for (x of rows)
    for (y of rows)
      for (z of rows)
        if(x+y+z == 2020) return x*y*z
  return null;
}

let rows = processInput();
let part1_result = part1(rows);
let part2_result = part2(rows);

console.log("Day 1:");
console.log("-> Part 1:", part1_result );
console.log("-> Part 2:", part2_result );
