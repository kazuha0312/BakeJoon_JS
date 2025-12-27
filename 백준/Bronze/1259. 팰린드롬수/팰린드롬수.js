const fs = require('fs');
const input = require('fs').readFileSync(0).toString();

let arr = input.trim().split('\n');
let i = 0;

while(true) {
  if(arr[i] == 0) {break;}
  let num = Number(arr[i]).toString();
  let bound = Math.floor(num.length/2);
  let isFel = true;
  for(let k = 0; k < bound; k++) {
    if(num[k] !== num[num.length - 1- k]) {
      isFel = false;
      console.log("no");
      break;
    }
  }
  if(isFel) {console.log("yes");}
  i++
}