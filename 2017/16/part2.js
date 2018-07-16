const fs = require('fs');
const input = fs.readFileSync('input', 'utf8').trim();

const spin = (array, x) => {
  while (spin > array.length) { x = x - array.length; }
  const front = array.splice(array.length-x, array.length);
  const new_array = front.concat(array);
  return new_array;
}

const exchange = (array, x, y) => {
  const spare = array[x];
  array[x] = array[y];
  array[y] = spare;
  return array;
}

let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
for (let i = 0; i < 1000000000; i++) {
  input.split(',').forEach(inst => {
    if (inst.split('')[0] === 's') arr = spin(arr, inst.replace('s', ''));
    if (inst.split('')[0] === 'x') arr = exchange(arr, inst.replace('x', '').split('/')[0], inst.split('/')[1]);
    if (inst.split('')[0] === 'p') arr = exchange(arr, arr.indexOf(inst.replace('p', '').split('/')[0]), arr.indexOf(inst.split('/')[1]));
  });
  if (i % 1000 === 0) console.log(i, arr);
}
console.log(arr.join(''));
