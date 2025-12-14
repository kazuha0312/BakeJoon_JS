const fs = require('fs');
const [A,B,C] = require('fs').readFileSync(0).toString().trim().split('\n');

let num = 0;
let str ='';

num = Number(A) + Number(B) - Number(C);
str = Number(A + B) - Number(C);

console.log(Number(num) + '\n' + str);