const fs = require("fs");
const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const N = input[0];

let arr = [];
let result ="";

for(let i = 0; i < N; i++) {
  arr.push(input[i+1]);
}

arr.sort((a,b)=>a-b);

console.log(arr.join('\n'));




