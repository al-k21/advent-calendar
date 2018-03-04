const fs = require('fs');

var input = fs.readFileSync('./input', 'utf8').trim().split(', ');
var state = { x: 0, y: 0, dir: 'N', states: [], inc: ''};
var hq = '';

input.forEach(e => {

  const newDir = e.slice(0, 1);
  const dis = parseInt(e.slice(1));

  if (state.dir === 'N') {
    if (newDir === 'R') {
      for (let x = 0; x < dis; x++ ) { check(state.x++, state.y) }
      state.dir = 'E';
    } else {
      for (let x = 0; x < dis; x++ ) { check(state.x--, state.y) }
      state.dir = 'W';
    }
  } else if (state.dir === 'S') {
    if (newDir === 'R') {
      for (let x = 0; x < dis; x++ ) { check(state.x--, state.y) }
      state.dir = 'W';
    } else {
      for (let x = 0; x < dis; x++ ) { check(state.x++, state.y) }
      state.dir = 'E';
    }
  } else if (state.dir === 'W') {
    if (newDir === 'R') {
      for (let x = 0; x < dis; x++ ) { check(state.x, state.y++) }
      state.dir = 'N';
    } else {
      for (let x = 0; x < dis; x++ ) { check(state.x, state.y--) }
      state.dir = 'S';
    }
  } else if (state.dir === 'E') {
    if (newDir === 'R') {
      for (let x = 0; x < dis; x++ ) { check(state.x, state.y--) }
      state.dir = 'S';
    } else {
      for (let x = 0; x < dis; x++ ) { check(state.x, state.y++) }
      state.dir = 'N';
    }
  }

});

function check(x, y) {

}

console.log('part1:', state.x, state.y);
