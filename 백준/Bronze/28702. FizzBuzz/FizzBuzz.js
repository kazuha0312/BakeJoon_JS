const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let num, idx;

for (let i = 0; i < 3; i++) {
  if (!isNaN(input[i])) {
    num = Number(input[i]);
    idx = i;
  }
}

let target = num + (3 - idx);

if (target % 15 === 0) console.log("FizzBuzz");
else if (target % 3 === 0) console.log("Fizz");
else if (target % 5 === 0) console.log("Buzz");
else console.log(target);
