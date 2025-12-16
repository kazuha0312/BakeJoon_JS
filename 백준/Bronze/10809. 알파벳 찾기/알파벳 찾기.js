const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('');

let alpha = Array(26).fill(-1);

for(let i =0; i< input.length; i++) {
  if(alpha[(input[i].charCodeAt(0) - 97)] == -1){
    alpha[(input[i].charCodeAt(0) - 97)] = i; 
  } 
}

console.log(alpha.join(' '));
