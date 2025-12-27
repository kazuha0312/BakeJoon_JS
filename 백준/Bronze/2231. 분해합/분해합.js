const fs = require('fs');
const N = Number(require('fs').readFileSync(0).toString().trim());

function check (num) {
  let result = Number(num);
  let str = num.toString();

  for(let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }

  return result;
}

let answer = 0;

for(let i = 0; i < N; i++) {
  if(check(i) === N) {
    answer = i;
    break;
  }
}

console.log(answer);