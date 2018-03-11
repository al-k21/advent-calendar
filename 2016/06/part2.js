const fs = require('fs');

const input = fs.readFileSync('./input', 'utf8').trim().split('\n');
let obj = {};
let str = '';

input.forEach(line => {
  const chars = line.split('');
  let i = 0;
  chars.forEach(char => {
    if (obj[i] === undefined) { obj[i] = ''};
    obj[i++] += char;
  });
});

for (let i in obj) {
  let largest = 1000, myKey;
  obj[i] = obj[i].split('').sort().join('');
  myObj = Char_Counts(obj[i]);
  Object.keys(myObj).forEach(key => {
    if (myObj[key] < largest) {
      myKey = key; largest = myObj[key];
    }
  });
  str += myKey;
}

console.log(str);

function Char_Counts(str) {
var uchars = {};
str.replace(/\S/g, function(l) {
  uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
}
