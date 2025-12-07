  const fs = require('fs');
  const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\s+/);

  let i = 0; 

  for(let k = 0; ; k++){

    let a = parseInt(input[i]);
    let b = parseInt(input[i+1]);

    if(a===0 && b===0)
    {
      break;
    }
    console.log(a + b);

    i+=2;
  }

