const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim();
if(input ===''){
console.log(0);
} else{
  console.log(input.split(/\s+/).length);
}