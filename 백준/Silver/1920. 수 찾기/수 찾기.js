const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = new Set(input[1].split(" ").map(Number));

const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

let result = [];

for (let i = 0; i < M; i++) {
  if (A.has(B[i])) result.push(1);
  else result.push(0);
}

console.log(result.join("\n"));
