function solution(myString, pat) {
  var answer = 0;

  let arr = myString
    .replaceAll("A", "C")
    .replaceAll("B", "A")
    .replaceAll("C", "B");

  answer = arr.includes(pat) ? 1 : 0;

  return answer;
}
