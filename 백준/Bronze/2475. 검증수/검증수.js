const fs = require('fs');
const [x,y,z,a,b] = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);

function getNum (x,y,z,a,b) {
  let num = (x*x + y*y + z*z + a*a + b*b) %10;
  return num;
}

console.log(getNum(x,y,z,a,b));


