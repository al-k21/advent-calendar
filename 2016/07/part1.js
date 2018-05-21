const fs = require('fs');

const input = fs.readFileSync('./input', 'utf8').trim().split('\n');
let count = 0;

for (line of input) {
  const abcd = line.match(/\[[^\]]*([a-z])([a-z])(\2)(\1)[^\]]*\]/i);
  const abba = line.replace(/\[[^\]]*[^\]]*\]/g, '.').match(/([a-z])([a-z])(\2)(\1)/i);
  !(abcd === null || abcd[1] === abcd[2]) ? "" :
  !(abba !== null && abba[1] !== abba[2]) ? "" : count++
}

console.log(count);
