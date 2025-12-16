const fs= require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let ascending = [];
let descending = [];

for(let i = 1; i <= 8; i++){
  ascending.push(Number(i));
}

for(let i = 8; i >= 1; i--){
  descending.push(Number(i));
}

if(input.join('') == ascending.join('')){
  console.log('ascending');
} else if(input.join('') == descending.join('')){
  console.log('descending');
} else{
  console.log('mixed');
}


