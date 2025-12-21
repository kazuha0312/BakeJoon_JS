const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const N = input[0];
const scores = input.slice(1);

const maxScore = Math.max(...scores);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += (scores[i] / maxScore) * 100;
}

console.log(sum / N);
