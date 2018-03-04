const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let raws = input.split('\n'); // Create an array of raws

for (raw of raws) {

  // Check if the main job is a subJob for any other raw
  if (raw.includes('->')) {
    let main = raw.split(' ')[0], flag = true;
    for (raw2 of raws) {  if (raw !== raw2) {
      if (raw2.includes(main)) { flag = false; }
    }}
    if  (flag == true)  { console.log("This is your captcha: " + main) }
  }

}
