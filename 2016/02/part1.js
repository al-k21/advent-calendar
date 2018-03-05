const fs = require('fs');

const input = fs.readFileSync('./input', 'utf8').trim().split('\n');
const states = { '1,1': 1, '2,1': 2, '3,1': 3,
                 '1,2': 4, '2,2': 5, '3,2': 6,
                 '1,3': 7, '2,3': 8, '3,3': 9 };

var state = { x: 2, y: 2};
var pin = '';

input.forEach(line => {

  line.split('').forEach(c => {
    if (c === 'U') { state.y--; }
    if (c === 'D') { state.y++; }
    if (c === 'L') { state.x--; }
    if (c === 'R') { state.x++; }
    if (state.x < 1) state.x = 1
    if (state.x > 3) state.x = 3
    if (state.y < 1) state.y = 1
    if (state.y > 3) state.y = 3
  });

  const str = state.x + ',' + state.y;

  Object.keys(states).forEach(function eachKey(key) {
    if (key === str) { pin += states[key]; }
  });

});

console.log(pin);
