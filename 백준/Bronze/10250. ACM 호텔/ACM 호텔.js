const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

const T = input[0];
let result = '';

for(let i = 1; i <= T; i ++) {
  const [H, W, N] = input[i].split(' ').map(Number);
  
  let floor =  N % H === 0 ? H : N % H;
  let room = Math.ceil(N/H);

  let roomNum = `${floor}${String(room).padStart(2,'0')}`;

  result += roomNum + '\n';
}

console.log(result.trim());