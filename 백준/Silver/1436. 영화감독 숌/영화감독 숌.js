const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);

let count = 0;
let num = 665;

while (true) {
  num++;

  if (String(num).includes("666")) {
    count++;
  }

  if (count === N) {
    console.log(num);
    break;
  }
}
