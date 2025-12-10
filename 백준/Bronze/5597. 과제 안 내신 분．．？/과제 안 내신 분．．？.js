const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let arr = [];
for (let i = 1; i <= 30; i++) {
  arr.push(i);
}

for (let i = 0; i < input.length; i++) {
  const idx = arr.indexOf(input[i]);
  if (idx !== -1) arr.splice(idx, 1);
}

console.log(arr.join('\n'));
