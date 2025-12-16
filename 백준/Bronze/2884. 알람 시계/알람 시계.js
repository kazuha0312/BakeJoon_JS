const fs = require('fs');
let [hour, min] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

if(min - 45 >= 0){
  min -= 45;
  console.log(hour + ' '+ min);
} else if (min - 45 < 0){
  if(hour == 0){
    hour = 23;
  } else{
    hour -= 1;
  }
  
  min = 60 - (45 - min);
  console.log(hour +' '+ min);
}

