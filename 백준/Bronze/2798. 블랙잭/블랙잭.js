const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let [N,M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let max = 0;

for(let i = 0; i < N - 2; i ++){
  for(let j = i + 1; j < N - 1; j++){
    for(let k = j + 1; k < N; k++) {
      let result = arr[i] + arr[j] + arr[k];
      if(result <= M && result > max){
        max = result;
      } 
    }
  }
}

console.log(max);