const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let arr = Array(42).fill(0);
let count = 0;

for(let i =0; i<10; i++){
  arr[input[i] % 42] ++; 
}

for(let i = 0; i < arr.length; i++) {
  if(arr[i] !== 0) {
    count ++;
  }
}

console.log(count);
