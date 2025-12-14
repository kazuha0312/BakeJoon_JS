const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

let x = input[0];

console.log(x.charCodeAt(0));