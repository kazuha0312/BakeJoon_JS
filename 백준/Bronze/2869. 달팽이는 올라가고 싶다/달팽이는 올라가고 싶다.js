const fs = require("fs");
const [a, b, v] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const days = Math.ceil((v - a) / (a - b)) + 1;
console.log(days);
