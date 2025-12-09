const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

const n = parseInt(input[0]);
const x = parseInt(input[1]);

let arr = [];

for (let i = 0; i < n; i++) {
  if (Number(input[i + 2]) < x) {
    arr.push(input[i + 2]);
  }
}

console.log(arr.join(' '));
