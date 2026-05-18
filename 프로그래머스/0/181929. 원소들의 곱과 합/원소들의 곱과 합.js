function solution(num_list) {
 
  let sum = 0;
  let mul = 1;
  for (let num of num_list) {
    mul *= num;
    sum += num;
  }

  return mul < sum*sum ? 1 : 0;
}
