const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

const n = Number(input[0]);
const v = Number(input[input.length - 1]);

let count = 0;

for(let i = 1; i <= n; i++){
  if(Number(input[i]) === v){
    count ++;
  }
}

console.log(count);





