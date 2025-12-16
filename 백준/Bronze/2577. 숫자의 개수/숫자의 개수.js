const fs = require('fs');
const [A, B, C] = fs.readFileSync(0).toString().trim().split('\n');

let arr = Array(10).fill(0);

let result = String(Number(A) * Number(B) * Number(C));

for (let i = 0; i < result.length; i++) {
  arr[result[i]]++;
}

console.log(arr.join('\n'));
