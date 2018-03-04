const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character
input = input.split('\n');

let delay = 0, layers = input.map(str => str.split`: `)
  .map(([depth, range]) => ({depth: +depth, range: (+range * 2) - 2}))

while (!layers.every(layer => (delay + layer.depth) % layer.range)) delay++

console.log(delay);
