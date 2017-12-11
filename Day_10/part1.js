const fs = require('fs');

let arr = [];
let curPos = 0, skip = 0;
let input = fs.readFileSync('./input', 'utf8');
input = input.slice(0, input.length - 1).split(','); // Delete new line character

for (i in input)  { input[i] = parseInt(input[i]); }
for (i =0; i<256;i++){ arr[i]=i; }

for (length of input) {
  arr = getArray(length, skip, curPos);
  curPos = curPos + length + skip;
  if (curPos > arr.length) { curPos -= arr.length; }
  skip ++;
}

console.log(arr[0]*arr[1]);

function getArray(length, skip, curPos) {

  let newArr = arr;
  let swapArr = [];

  if (curPos+length <= arr.length) {
    swapArr = newArr.slice(curPos, curPos+length);
  } else {
    swapArr = (curPos == arr.length) ? JSON.parse("[" + newArr[arr.length-1] + "]") : newArr.slice(curPos, arr.length)
    swapArr = swapArr.concat(newArr.slice(0, length- (arr.length-curPos)));
  }

  swapArr.reverse();

  let j=0, x=0;
  for (var i = 0; i < length; i++, j++) {
    if (curPos+i < arr.length) {
      newArr[curPos+i]=swapArr[j];
    } else {
      newArr[x]=swapArr[j]; x++;
    }
  }

  return newArr;
}
