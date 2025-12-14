const fs = require('fs');
const N = Number(require('fs').readFileSync(0).toString().trim());

let s = '*';
let v = ' ';
let str ='';

for(let i = 1; i < N + 1; i++) {
  str += v.repeat(N-i) + s.repeat(i) +'\n';
}

console.log(str);
