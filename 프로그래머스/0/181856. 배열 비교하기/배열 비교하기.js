function solution(arr1, arr2) {
  var answer = 0;

  if (arr1.length == arr2.length) {
    if (getSum(arr1) > getSum(arr2)) return 1;
    else if (getSum(arr1) < getSum(arr2)) return -1;
    else return 0;
  } else {
    if (arr1.length > arr2.length) return 1;
    else if (arr1.length < arr2.length) return -1;
  }

  return answer;
}

function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
