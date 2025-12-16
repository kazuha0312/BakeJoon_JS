const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);

let N = input[0];

let arr =[];

for(let i =0; i < input.length - 1; i++){
  arr.push(input[i+1]);
}

arr.sort((a,b)=>a-b);

console.log(arr[0] +' '+arr[arr.length-1]);

