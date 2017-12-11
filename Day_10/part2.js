const fs = require('fs');

let array = [];
let curPos = 0, skip = 0;
let input = "225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110"

for (i =0; i<256;i++){ array[i]=i; }

const round = (initial, lengths, position = 0, skip = 0) => {
  let array = lengths.reduce((acc, length) => {
    let section = acc.slice(position, position + length)

    if (section.length < length) {
      let wrapped = section.concat(acc.slice(0, length - section.length)).reverse();
      let firstPart = wrapped.slice(0, section.length);
      let secondPart = wrapped.slice(firstPart.length - wrapped.length);
      acc.splice(position, firstPart.length, ...firstPart);
      acc.splice(0, secondPart.length, ...secondPart);
    } else {
      section = section.reverse();
      acc.splice(position, section.length, ...section);
    }

    position += (skip + length);
    position %= acc.length;
    skip++;

    return acc
  }, initial)
  return {array, position, skip}
}

let result = {array};
let lengths = input.split(``).map(a => a.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
// console.log(lengths);

for (let i = 0; i < 64; i++) result = round(result.array, lengths, result.position, result.skip)
array = result.array;
// console.log(array);

let output = '';
for (let i = 0; i < 16; i++) {
  let vals = array.slice(i * 16, (i * 16) + 16);
  let char = vals.reduce((a, v) => a ^ v, 0);
  output += char.toString(16).padStart(2, '0');
}
// console.log(array);
console.log(output);
