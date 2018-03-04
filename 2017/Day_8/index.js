const fs = require('fs');
const util = require('util')

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character

let raws = input.split('\n'); // Create an array of raws

let registers = {};

let largest = -100;
let registerName, condition;

for(raw of raws)  {
  registerName = raw.split(' ')[0];
  condition = raw.split(' if ')[1];
  instruction = raw.split(' if ')[0].split(' ').splice(1, 3);

  condition = condition.replace(condition.split(' ')[0], "registers."+condition.split(' ')[0]);
  let add;
  if (checkCodition(registerName, condition, instruction)){

    if (typeof eval("registers." +registerName) == 'undefined') {
      eval( "registers." +registerName + " = 0"  );
    }
    let oldV = eval("registers." +registerName);

    if (instruction[1] != 0) {
      instruction[0] = (instruction[0] === "inc") ? "+" : "-"
      add = eval("(" + instruction[0]+ "1)*"+ instruction[1])
      if (add>0) { add = "+" + add; }
    } else {
      add = "+0";
    }
    // console.log("registers."+ registerName + "="  +oldV+ add);
    eval("registers."+ registerName + "=" + oldV + add)

  }
  // console.log(registers);
  var x=Object.keys(registers).reduce(function(a, b){ return registers[a] > registers[b] ? a : b })
  // console.log(x,eval("registers."+x));
  largest = (largest<eval("registers."+x)) ? eval("registers."+x) : largest

}
console.log("largest = " + largest);

function checkCodition(registerName, condition, instruction){
  // console.log(registerName, instruction, condition);
  let num1 = eval(condition.split(' ')[0]);
  let num1Name = condition.split(' ')[0];

  if (typeof eval(condition.split(' ')[0]) == 'undefined') {
    eval( num1Name + " = 0"  );
  }
  let result = eval(condition);
  // console.log(condition, eval(condition.split(' ')[0]), result);

  return result;
}

console.log(util.inspect(registers, true, null) );
