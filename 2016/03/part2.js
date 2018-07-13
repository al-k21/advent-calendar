const fs = require('fs');
let input = fs.readFileSync('./input', 'utf8').trim().split('\n');
let num = 0;

for(let i = 0; i < input.length; i = i + 3) {
  let arr = [];
  for (let j = 0; j < 3; j++ ) {
    const sides = input[i+j].trim().split(' ').map(side => { return parseInt(side); });
    arr = arr.concat(sides);
  }
  let array = [[], [], []];
  for (let j = 0; j < arr.length; j++) {
    if (j === 0 || j === 3 || j === 6) array[0].push(arr[j]);
    if (j === 1 || j === 4 || j === 7) array[1].push(arr[j]);
    if (j === 2 || j === 5 || j === 8) array[2].push(arr[j]);
  }
  array.forEach(element => { check(element) });
}

function check(sides) {
  const largestSide = Math.max(...sides);
  let sum = 0;
  sides.forEach(side => { if (side != largestSide ) sum += side; });
  if (largestSide <= sum) num++;
}

console.log(num);
