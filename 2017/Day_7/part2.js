const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let raws = input.split('\n'); // Create an array of raws

for (raw of raws) {

  // let main = raw.split(' ')[0];
  let mainW = raw.split('(')[1].split(')')[0];
  let weigth = (raw.includes('->')) ? getWeight(raw, mainW) + parseInt(mainW) : parseInt(mainW)

  console.log(weigth);
}

function getWeight(row, mainW)  {
  let subJobs = row.split(' -> ')[1].split(', ');
  // console.log(subJobs);
  let main = raw.split(' ')[0];
  let weigth = 0;
  let subArr = [];


  for (subJob of subJobs) {
    let subWeigth = 0;
    for (raw of raws) {
      if (subJob === raw.split(' ')[0]) {
        let mainW = raw.split('(')[1].split(')')[0];
        subWeigth = (raw.includes('->')) ? getWeight(raw, mainW) + parseInt(mainW) : parseInt(mainW)
        subArr.push(subWeigth);
        weigth += subWeigth
        if (!subArr.reduce(function(a, b){ return (a === b) ? a : NaN; })) {
          console.log( main, weigth, subJob, subWeigth, subJobs, subArr, "...");
        }
      }
    }
    // console.log(!!subArr.reduce(function(a, b){ return (a === b) ? a : NaN; }));
  }


  return weigth;
}
