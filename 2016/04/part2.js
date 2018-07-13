const fs = require('fs');
const input = fs.readFileSync('./input', 'utf8').trim().split('\n');

let sum = 0;

input.forEach(line => {
  line = line.split('-');
  const id = parseInt(line[line.length-1].split('[')[0]);
  const checksum = line[line.length-1].split('[')[1].replace(']', '');
  line.pop();
  const name = line.join(' ');
  const shiftedName = caesarShift(name, id);
  // console.log(name, caesarShift(name, id));
  if (shiftedName.includes('pole')) {
    console.log(id);
  }
});

function  caesarShift(str, amount) {

  // Wrap the amount
  if (amount < 0) { return caesarShift(str, amount + 26); }
  var output = '';

  // Go through each character
  for (var i = 0; i < str.length; i ++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90)) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if ((code >= 97) && (code <= 122)) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }

  return output;
};
