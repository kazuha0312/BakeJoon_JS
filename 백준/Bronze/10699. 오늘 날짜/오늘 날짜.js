const date = new Date();

const year = date.getFullYear();
const month = (date.getMonth() + 1);
var day = date.getDate();

if(day <10 || day > 0) {
  day = '0'+day;
}

console.log(year + '-' + month + '-' + day);