const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim();

let arr ='';

for(let i = 0; i< input.length; i++){
  let ch = input[i];

  if(ch >= 'a' && ch <='z'){
    arr += ch.toUpperCase();
  }else{
    arr += ch.toLowerCase();
  }
}

console.log(arr);