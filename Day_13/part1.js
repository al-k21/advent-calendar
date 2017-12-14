const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character
input = input.split('\n');

let severity = input.map(str => str.split`: `)
  .map(([depth, range]) => ({depth: depth, range: range, mod: (range * 2) - 2}))
  .reduce((acc, layer) => (layer.depth % layer.mod) ? acc : acc + (layer.depth * layer.range), 0)

console.log(severity);
