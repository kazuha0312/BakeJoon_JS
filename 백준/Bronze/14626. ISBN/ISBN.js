const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');

let sum = 0;
let idx = -1;

for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    idx = i; // 알파벳 위치
    continue;
  }

  let num = Number(input[i]);
  if ((i + 1) % 2 === 0) sum += num * 3;
  else sum += num;
}

// 알파벳 자리에 들어갈 숫자 찾기
for (let x = 0; x <= 9; x++) {
  let temp = sum;
  if ((idx + 1) % 2 === 0) temp += x * 3;
  else temp += x;

  if (temp % 10 === 0) {
    console.log(x);
    break;
  }
}
