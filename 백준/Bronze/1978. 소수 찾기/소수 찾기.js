const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

const N = Number(input[0]);
const arr = input.slice(1).map(Number);

let count = 0;

for (let i = 0; i < N; i++) {
  let num = arr[i];
  if (num === 1) continue;

  let isPrime = true;
  for (let j = 2; j * j <= num; j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) count++;
}

console.log(count);
