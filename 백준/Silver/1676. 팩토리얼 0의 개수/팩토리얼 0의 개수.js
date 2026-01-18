const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf8').trim());

let count = 0;
let n = input;

while (n >= 5) {
  n = Math.floor(n / 5);
  count += n;
}

console.log(count);
