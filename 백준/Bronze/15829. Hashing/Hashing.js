const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

let L = Number(input[0]);
let arr = input[1].split('');
const MOD = 1234567891n

let hash = 0n, power = 1n;

for(let i = 0; i < L; i++) {
  const value = BigInt(arr[i].charCodeAt() - 96);
  hash = (hash + value * power) % MOD;
  power = (power * 31n) % MOD;
}

console.log(hash.toString() );