const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let N = Number(input[0]);
let A = input[1];

let result = 0;

for (let i = 0; i < N; i++) {
  result += Number(A[i]);
}

console.log(result);
