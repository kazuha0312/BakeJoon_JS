const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const N = Number(input[0]);

let members = [];

for (let i = 1; i <= N; i++) {
  const data = input[i].split(' ');
  const age = Number(data[0]);
  const name = data[1];

  members.push([age, name]);
}

members.sort(function (a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});

for (let i = 0; i < members.length; i++) {
  console.log(members[i][0] + ' ' + members[i][1]);
}
