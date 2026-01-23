const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const points = input.slice(1).map(line => line.split(' ').map(Number));

points.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];                
});

let answer = '';
for (let i = 0; i < N; i++) {
  answer += `${points[i][0]} ${points[i][1]}\n`;
}

console.log(answer.trim());
