
let arr = [];
let input = [225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110];
let curPos = 0, skip = 0;

for (i =0; i<256;i++){ arr[i]=i; }

// console.log(arr, "arr");
// console.log(input, "input");
// let string="";
// arr.forEach(function(element){ string += element + " "; });
// console.log(string);

for (length of input) {
  arr = getArray(length, skip, curPos);
  curPos = curPos + length + skip;
  if (curPos > arr.length) { curPos -= arr.length; }
  skip ++;
  // console.log(arr, "<<<<");
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
