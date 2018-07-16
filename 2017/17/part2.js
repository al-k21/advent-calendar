const input = 386;
let [pos, add, times] = [0, 1, 50000000];
let array = [0];

const spin = (input) => {
  while (input>array.length) input = input - array.length;
  pos = pos + input;
  while (pos>=array.length) pos = pos - array.length;
  array.splice(pos++, 0, add++);
}

for (let x = 0; x < times; x++) {
  spin(input);
  if ( x % 10000 === 0) console.log(x);
}

console.log(array[array.indexOf(0)+1]);
