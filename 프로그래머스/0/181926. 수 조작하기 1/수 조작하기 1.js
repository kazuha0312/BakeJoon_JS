function solution(n, control) {
  var answer = 0;

  let arr = control.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "w") n += 1;
    else if (arr[i] == "s") n -= 1;
    else if (arr[i] == "d") n += 10;
    else if (arr[i] == "a") n -= 10;
  }

  answer = n;

  return answer;
}
