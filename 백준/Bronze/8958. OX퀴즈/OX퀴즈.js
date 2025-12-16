const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let T = Number(input[0]);
let result = '';

for(let i = 0; i < T; i++) {
  let arr = input[i+1].split('');
  let count = 0;
  let score = 0;

  for(let j = 0; j <arr.length; j++) {
    if(arr[j] == 'O') {
      score += count + 1;
      count ++;
    } else {
      count = 0;
    }
  }

  result += score +'\n';

}

console.log(result);