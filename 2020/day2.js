const helper = require('./utils/helper_functions');

function part1(input) {
  let res=0
  for (line of input) {
    const string=line.split(': ')[1];
    const letter=line.split(': ')[0].split(' ')[1]
    const minOcc=parseInt(line.split(': ')[0].split(' ')[0].split('-')[0]);
    const maxOcc=parseInt(line.split(': ')[0].split(' ')[0].split('-')[1]);
    const regex = new RegExp(letter, "g");
    const numOfOcc=(`${string}`.match(regex) || []).length;
    if ( numOfOcc >= minOcc && numOfOcc <= maxOcc) 
      res++
  }
  return res;
}

function part2(input) {
  let res=0
  for (line of input) {
    const string=line.split(': ')[1];
    const letter=line.split(': ')[0].split(' ')[1]
    const minOcc=parseInt(line.split(': ')[0].split(' ')[0].split('-')[0]);
    const maxOcc=parseInt(line.split(': ')[0].split(' ')[0].split('-')[1]);
    const regex = new RegExp(letter, "g");
    let matchArray = [];
    while ((match = regex.exec(string)) != null)
      matchArray.push(match.index + 1);
    if ((matchArray.includes(minOcc) && !matchArray.includes(maxOcc)) ||
        (matchArray.includes(maxOcc) && !matchArray.includes(minOcc)) )
      res++;
  }
  return res;
}

const input = helper.processInput('day2');

const part1_result = part1(input);
const part2_result = part2(input);

console.log("Day 2:");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
