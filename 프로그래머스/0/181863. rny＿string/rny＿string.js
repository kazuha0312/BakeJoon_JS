function solution(rny_string) {
  // 1. 문자열을 배열로 쪼개서 저장합니다.
  let arr = rny_string.split("");

  // 2. 배열을 돌면서 'm'을 찾으면 'rn'으로 바꿉니다.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "m") {
      arr[i] = "rn"; 
    }
  }

  // 3. 배열을 다시 하나의 문자열로 합쳐서 반환합니다.
  return arr.join("");
}