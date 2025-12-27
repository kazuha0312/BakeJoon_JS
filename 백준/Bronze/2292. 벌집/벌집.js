const fs = require('fs');
const N = Number(require('fs').readFileSync(0).toString().trim());

// 1 = 1 1+6*0, 2~7 = 2;1+6*1, 8~19 = 3; 1+6*3, 20~37 =4  1+6*6, 38~61 = 5; 1+6:10
// 0 1 3 6 10
//  1 2 3 4

let floor = 1;
let max = 1;

while(N > max) {
  max += 6*floor;
  floor ++;
}

console.log(floor);