const fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);

const T = input[0];
// 0층 - 1 2 3 4 ..., 1층 - 0층의 사람 수의 합, 2층- 1층 사람들의 합
// k층 n호.
//
//  1  4  10
//  1  3  6
//  1  2  3

for(let i = 0; i < T; i++) {
  let k = input[1 + i*2];
  let n = input[2 + i*2];
  let arr =[]; // 0층 사람 들어있음 [1,2,3]
  let fullArr =[];  // 0번배열 - 0층, 1번배열 - 1층...

  for(let j = 1; j <= n; j++) {
   arr.push(j); // 0층 사람 arr 배열에 넣기
  }

  fullArr.push(arr);

  for(let i = 0; i < k; i++){
    let temp = fullArr[i]; // 이전 층의 배열 소환
    let arr_temp =[]; // 새로운 층을 저장할 배열
    let temp_sum = 0; // 임시로 n호실의 명수를 저장할 변수

    for(let j = 1; j <= n; j++) {
      temp_sum += temp[j-1];
      arr_temp.push(temp_sum);
    }

    fullArr.push(arr_temp);
  }

    console.log(fullArr[k][n-1]);

}