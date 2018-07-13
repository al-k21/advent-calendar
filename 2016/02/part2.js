const fs = require('fs');
const input = fs.readFileSync('./input', 'utf8').trim().split('\n');
const states = {
  '1,3': 1,
  '2,2': 2, '2,3': 3, '2,4': 4,
  '3,1': 5, '3,2': 6, '3,3': 7, '3,4': 8, '3,5': 9,
  '4,2': 'A', '4,3': 'B', '4,4': 'C',
  '5,3': 'D'
};
const pin = [];

let state = { x: 3, y: 1};
input.forEach(line => {
  line.split('').forEach(c => {
    let new_state = JSON.parse(JSON.stringify(state));
    if (c === 'U') new_state.x--; if (c === 'D') new_state.x++;
    if (c === 'L') new_state.y--; if (c === 'R') new_state.y++;
    const str = `${new_state.x},${new_state.y}`;
    if (states[str]) state = new_state;
  });
  const str = `${state.x},${state.y}`;
  pin.push(states[str]);
});

console.log(`PIN: ${pin.join('')}`);
