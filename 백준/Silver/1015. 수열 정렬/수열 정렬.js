const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const arr = A.map((value, index) => ({ value, index }));

arr.sort((a, b) => {
  if (a.value === b.value) return a.index - b.index;
  return a.value - b.value;
});

const P = new Array(N);

arr.forEach((item, sortedIndex) => {
  P[item.index] = sortedIndex;
});

console.log(P.join(' '));
