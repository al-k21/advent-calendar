// Generator A starts with 722
// Generator B starts with 354

let a = 722, b = 354 , count = 0;

for (let i = 0; i < 40000000 ; i++) {
  a = (a * 16807) % 2147483647;
  b = (b * 48271) % 2147483647;
  console.log(a,
    parseInt(a, 2),
    a & 0xFFFF);

  if ((a & 0xFFFF) === (b & 0xFFFF)) { count++ }
}

console.log(count);
