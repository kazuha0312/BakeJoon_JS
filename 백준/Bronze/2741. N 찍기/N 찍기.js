const fs = require('fs');
const input = require('fs').readFileSync("/dev/stdin").toString().split(' ');

let N = parseInt(input[0]);

for(let i =1; i<N+1;i++){
  console.log(i);
}

