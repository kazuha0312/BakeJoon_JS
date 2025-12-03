const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const K = A - B;

if(K>0) console.log(">");
if(K===0) console.log("==");
if(K<0) console.log("<");
