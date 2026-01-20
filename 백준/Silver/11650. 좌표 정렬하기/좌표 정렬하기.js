const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const points = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}

points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; 
  }
  return a[0] - b[0]; 
});

let result = '';
for (const [x, y] of points) {
  result += `${x} ${y}\n`;
}

console.log(result.trim());
