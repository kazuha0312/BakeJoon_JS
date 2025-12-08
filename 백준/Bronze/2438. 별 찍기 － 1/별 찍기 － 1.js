const fs = require('fs');
const input = require('fs').readFileSync(0).toString().split(' ');

let a = parseInt(input[0]);
let star = '';
for(let i = 1; i < a+1; i++){
  star += '*';

  console.log(star);
}