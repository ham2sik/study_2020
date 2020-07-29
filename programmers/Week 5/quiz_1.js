function solution(s) {
    var answer = '',
        strLength = s.length,
        quot = parseInt(strLength / 2);
    if (strLength % 2) {
        answer = s.substr(quot, 1);
    } else {
        answer = s.substr(quot - 1, 2 );
    }
    return answer;
}
