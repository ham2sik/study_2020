// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    var answer = '',
        strLength = s.length,
        quot = parseInt(strLength / 2);
    if (strLength % 2) {
        answer = s.substring(quot, quot + 1);
    } else {
        answer = s.substring(quot - 1, quot + 1 );
    }
    return answer;
}
