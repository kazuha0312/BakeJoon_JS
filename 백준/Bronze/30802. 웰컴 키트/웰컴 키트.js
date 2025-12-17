const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];

let shirts = [];
for (let i = 0; i < 6; i++) {
  shirts.push(input[idx++]);
}

const T = input[idx++];
const P = input[idx++];

let shirtBundles = 0;
for (let i = 0; i < 6; i++) {
  shirtBundles += Math.ceil(shirts[i] / T);
}

const penBundles = Math.floor(N / P);
const remainPens = N % P;

console.log(shirtBundles);
console.log(penBundles + " " + remainPens);
