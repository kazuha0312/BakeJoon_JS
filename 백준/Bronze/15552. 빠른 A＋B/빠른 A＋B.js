const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

const a = input[0];
const arr = [];

for(let i = 1; i < a*2; i+=2){
  arr.push(Number(input[i])+Number(input[i+1])+'\n');
}

console.log(arr.join(''));
