const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8').trim().split('\n');
let num = 0;

input.forEach(triangle => {
  const sides = triangle.trim().split(' ').map(side => { return parseInt(side); });
  const largestSide = Math.max(...sides);
  let sum = 0;
  sides.forEach(side => { if (side != largestSide && side != undefined ) sum += side; })
  if (largestSide <= sum) num++;
});

console.log(num);
