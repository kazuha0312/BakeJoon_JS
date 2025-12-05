const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const A = parseInt(input);

if (A % 4 === 0) {
    if (A % 400 === 0 || A % 100 !== 0) {
        console.log(1);
    } else {
        console.log(0);
    }
} else {
    console.log(0);
}
