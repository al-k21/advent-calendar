var banks = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];
// var banks = [0, 2, 7, 0];

var existingCombos = [];
const numOfBanks = banks.length;

let found = false;
let restibutor, index;
let count = 0;

while (!found) {

  if (existingCombos.includes(banks.join('.'))) {

    found = true;
    let distance =  count - existingCombos.indexOf(banks.join('.'));
    console.log("This is your captcha:" + distance);

  } else {

    existingCombos = existingCombos.concat(banks.join('.'));

    count++;
    restibutor = getMaxOfArray(banks);
    index= banks.indexOf(restibutor);
    banks[index] = 0;

    for (let i = 1; i<=restibutor; i++) {
      let new_index = ((i+index) >= banks.length) ? i+index-banks.length : i+index
      banks[new_index]  += 1;
    }

  }

}


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
