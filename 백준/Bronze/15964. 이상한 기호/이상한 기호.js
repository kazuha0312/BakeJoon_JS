  const fs = require('fs');
  const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);

  function what (a, b) {
    let result = (a+b)*(a-b);
    return result;
  }
  let A = input[0];
  let B = input[1];

  console.log(what(A,B));

