const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let T = Number(input[0]);

let result ='';

for(let i = 0; i < T; i++) {
  let [R, S] = input[i+1].split(' ');

  for(let j =0; j < S.length; j++){
    result += String(S[j]).repeat(R);
  }

  result += '\n';
}

console.log(result);