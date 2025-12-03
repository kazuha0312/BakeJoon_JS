const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

let div = (A/B);

if(!Number.isInteger(div)){
  div = div.toFixed(9);
}

console.log(div);