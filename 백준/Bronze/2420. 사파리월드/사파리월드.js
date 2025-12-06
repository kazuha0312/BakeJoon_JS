const fs = require("fs");
const input = require("fs").readFileSync(0).toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

 let sum = (A-B);

if(sum >= 0) {
  console.log(sum);
} else{
  console.log(-sum);
}

