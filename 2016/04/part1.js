const fs = require('fs');
const input = fs.readFileSync('./input', 'utf8').trim().split('\n');

let sum = 0;

input.forEach(line => {

  line = line.split('-');
  const id = line[line.length-1].split('[')[0];
  const checksum = line[line.length-1].split('[')[1].replace(']', '');
  line.pop();
  const name = line.join('');
  const myObj = Char_Counts(name);
  let [keys, str, obj] = [Object.keys(myObj), '', {}];

  keys.sort();
  keys.forEach(key => { obj[key] = myObj[key];})

  for (let x = 0; x < 5; x++) {
    let largest = 0, myKey;
    Object.keys(obj).forEach(key => { if (obj[key] > largest) myKey = key; largest = obj[key]; });
    str += myKey;
    delete obj[myKey];
  }

  if (str === checksum) { sum += parseInt(id); }

});

function Char_Counts(str) {
var uchars = {};
str.replace(/\S/g, function(l) {
  uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
}

console.log(sum);
