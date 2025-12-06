const fs = require('fs');
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const x = parseInt(input[0]);

let i = 1; 

for(let k = 1; k< x+1; k++){

  let a = parseInt(input[i]);
  let b = parseInt(input[i+1]);

  console.log(a + b);

  i+=2;
}

