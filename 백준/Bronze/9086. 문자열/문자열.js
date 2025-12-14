const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let T = Number(input[0]);

for(let i = 1; i < T + 1; i ++){
  let str = '';
  let a = input[i];
  str += (a[0].toString() + a[a.length - 1].toString());

  console.log(str);
}