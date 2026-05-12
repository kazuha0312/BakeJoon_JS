function solution(n_str) {
    var answer = '';
    
    let index = 0;
    
    while(n_str[index] === '0') index++;
    
    answer = n_str.substring(index);
    
    return answer;
}