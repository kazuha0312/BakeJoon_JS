const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

for(let i = 0; i < input.length; i+=2){
  console.log(Number(input[i])+Number(input[i+1]));
}

