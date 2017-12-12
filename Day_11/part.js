const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character
let x = 0, y = 0, z = 0;
// console.log(input);
let maxDistance = 0, distance;
input = input.split(',');

for (i of input) {
  // console.log(i);
  if (i === 'n')        { x; y++; z--}
  else if (i === 's')   { x; y--; z++}
  else if (i === 'ne')  { x++; y; z--}
  else if (i === 'se')  { x++; y--; z}
  else if (i === 'sw')  { x--; y; z++}
  else if (i === 'nw')  { x--; y++; z}

  distance = (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2;
  if (distance > maxDistance) { maxDistance = distance; }
}

console.log("Part 1: " + (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2);
console.log("Part 2: " + maxDistance);
