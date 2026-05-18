function solution(strArr) {
  var answer = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i].includes("ad")) strArr.splice(i, 1);
  }

  answer = strArr;
  return answer;
}
