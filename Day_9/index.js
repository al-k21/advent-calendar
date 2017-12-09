const fs = require('fs');
const util = require('util')

let input = fs.readFileSync('./input.txt', 'utf8');
raw = input.slice(0, input.length - 1); // Delete new line character

raw = raw.replace(/!!/g, "");
raw = raw.replace(/!!!/g, "!");
raw = raw.replace(/!!!!/g, "");
raw = raw.replace(/!!!!!/g, "!");
raw = raw.replace(/!!!!!!/g, "");
raw = raw.replace(/!!!!!!!/g, "!");
raw = raw.replace(/!!!!!!!!/g, "");

let count = 0;
while (raw.indexOf('<') !== -1 && raw.indexOf('!') !== (raw.indexOf('<') - 1)) {
  let index = raw.indexOf('>') + 1;
  while (raw[raw.indexOf('>') - 1] === "!") {
    raw = raw.replace('>', 'a');
    index = raw.indexOf('>') + 1;
  }
  count += (index - raw.indexOf('<') - 2 - (raw.slice(raw.indexOf('<') + 1, index - 1).split('!').length - 1) * 2);
  raw = raw.slice(0, raw.indexOf('<')) + raw.slice(index, raw.length);
}

raw = raw.replace(/},}/g, "}}");
raw = raw.replace(/{,{/g, "{{");

chars = raw.split('');

let sum = 0;
for (i in chars) { if (chars[i] === '{') { sum += parseInt(getDepth(chars[i], i)); } }

console.log("Part 1: " + sum, "\nPart 2: " + count);

function getDepth(char, i) {
  let str = raw.slice(0, parseInt(i) + 1);
  let depth;

  if (str.match(/}/g) != null) {
    depth = str.match(/{/g).length - str.match(/}/g).length;
  } else {
    depth = str.match(/{/g).length;
  }

  return depth;
}
