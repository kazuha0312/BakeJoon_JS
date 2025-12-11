const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = input[0];
const m = input[1];

const arr1 = [];
const arr2 = [];

for (let i = 0; i < n * m; i++) {
  arr1.push(input[2 + i]);
}

for (let i = 0; i < n * m; i++) {
  arr2.push(input[2 + n * m + i]);
}

let idx = 0;
let result = "";

for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < m; j++) {
    line += (arr1[idx] + arr2[idx]) + " ";
    idx++;
  }
  result += line.trim() + "\n";
}

console.log(result.trim());
