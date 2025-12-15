const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let max = input[0];
let idx = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    idx = i + 1; 
  }
}

console.log(max);
console.log(idx);
