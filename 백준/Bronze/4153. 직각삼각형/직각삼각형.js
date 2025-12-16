const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  arr.sort((a,b)=>a-b);

  if(arr[0]===0 && arr[1]===0 && arr[2]===0){
    break;
  }

  if( arr[0] * arr[0] + arr[1] * arr[1] == arr[2] * arr[2]){
    console.log('right');
  } else{
    console.log('wrong');
  }

}
