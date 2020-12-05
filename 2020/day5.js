const helper = require('./utils/helper_functions');

function getRow(row) {
  let min_row = 0
  let max_row = 127
  row = row.split("");
  for (char of row) {
    if (char === "F") max_row = Math.floor((max_row+min_row)/2)
    else if (char === "B") min_row = Math.ceil((max_row+min_row)/2)
  }
  if (min_row === max_row) return max_row
  return 0
}

function getColumn(column) {
  let min_col = 0
  let max_col = 7
  for (char of column)  {
    if (char === "L") max_col = Math.floor((max_col+min_col)/2)
    else if (char === "R") min_col = Math.ceil((max_col+min_col)/2)
  }
  if (min_col === max_col) return max_col
  return 0
}

function getSeatId(seat_row, seat_column) {
  return parseInt(seat_row) * 8 + parseInt(seat_column);
}

function part1(input) {
  let max_seat_id = 0
  for (seat of input) {
    let seat_row = getRow(seat.slice(0, 7));
    let seat_column = getColumn(seat.slice(7, 10));
    let seat_id = getSeatId(seat_row, seat_column)
    if (seat_id > max_seat_id) max_seat_id = seat_id
  }
  return max_seat_id
}

function part2(input) {
  let seat_id_arr = []
  for (seat of input) {
    let seat_row = getRow(seat.slice(0, 7));
    let seat_column = getColumn(seat.slice(7, 10));
    seat_id_arr.push(getSeatId(seat_row, seat_column))
  }
  seat_id_arr.sort((a, b) => a - b);
  let missing_id;
  for (i in seat_id_arr) {
    i = parseInt(i)
    if ( seat_id_arr[i+1] && seat_id_arr[i] != seat_id_arr[i+1]-1) {
      missing_id=seat_id_arr[i+1]-1;
      break;
    }
  }
  return missing_id
}

const input = helper.processInput('day5');

const part1_result = part1(input);
const part2_result = part2(input);

console.log("Day :");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
