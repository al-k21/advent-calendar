const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8').trim().split('\n');
let num = 0;
let string;

for(let i = 0; i < input.length; i = i + 3) {

  let arr = [];

  for (let j = 0; j < 3; j++ ) {
    const sides = input[i+j].trim().split(' ').map(side => {
        return parseInt(side);
    });
    arr = arr.concat(sides);
  }

  let array1=[],array2=[],array3=[];
  for (let j = 0; j < arr.length; j++) {
    if (j === 0 || j === 3 || j === 6 ) {
      array1.push(arr[j]);
    } else if (j === 1 || j === 4 || j === 7) {
      array2.push(arr[j]);
    } else if (j === 2 || j === 5 || j === 8) {
      array3.push(arr[j]);
    }
  }
  console.log(array1, array2, array3);
  check(array1); check(array2); check(array3);
}

function check(sides) {
  const largestSide = Math.max(...sides);
  let sum = 0;

  sides.forEach(side => {
    if (side != largestSide ) {
      sum += side;
    }
  })

  if (largestSide <= sum) {
    num++;
  }

}

console.log(num);
