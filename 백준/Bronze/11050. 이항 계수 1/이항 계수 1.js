const fs = require('fs');
const [n,k] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

function fac(a){
  let sum = 1;
  for(let i = 1; i<=a; i++){
    sum *= i;
  }
  return sum;
}

console.log(fac(n) / (fac(k)*fac(n-k)));
