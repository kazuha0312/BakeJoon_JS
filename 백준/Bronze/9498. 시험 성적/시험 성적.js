const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

const A = parseInt(input[0]);

if(A <= 100 && A >= 90 ){
  console.log("A");
} else if(A<90 &&A>=80){
  console.log("B");
} else if(A<80 &&A>=70){
  console.log("C");
} else if(A<70 &&A>=60){
  console.log("D");
} else {
  console.log("F");
}

