const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let raws = input.split('\n'); // Create an array of raws

for (raw of raws) {

  if (raw.includes('->')) {
    let main = raw.split(' ')[0];
    let mainW = raw.split('(')[1].split(')')[0];
    console.log(mainW);
    let weigth = getWeight(raw, mainW, raws);
    console.log(mainW, weigth);
  }

}

function getWeight(raw, mainW, raws)  {
  let subJobs = raw.split(' -> ')[1].split(', ');
  console.log(subJobs);
  let weigth = 0;

  for (subJob of subJobs) {
    for (raw of raws) {
      if (subJob === raw.split(' ')[0]) {
        weigth += parseInt(raw.split('(')[1].split(')')[0])
        console.log(raw, subJob);
      }
    }
  }
  return weigth;
}
