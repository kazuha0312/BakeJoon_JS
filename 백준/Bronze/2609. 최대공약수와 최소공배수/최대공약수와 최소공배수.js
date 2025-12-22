const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [A, B] = input;

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

const G = gcd(A, B);
const L = (A * B) / G;

console.log(G + '\n' + L);
