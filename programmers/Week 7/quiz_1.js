// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
    let answer = 0;
    
    // lost, reserve 동일 값 제거
    var tempLost = lost.filter(function(value) {
        return reserve.indexOf(value) == -1;
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    });
    reserve = reserve.filter(value => !lost.includes(value));
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    lost = tempLost;
    // console.log(lost, reserve);
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    
    for (let i = 1;i <= n; i ++) {
        if (lost.length > 0) {
            if (i != lost[0]) { // 도난 비교
                answer ++;
            } else {
                lost.splice(0, 1);
                console.log(lost);
                if (reserve.length > 0) {
                    for (let j = 0; j < reserve.length; j ++ ) {
                        if (reserve[j] == i-1 || reserve[j] == i+1) { // 여벌 비교
                            answer ++;
                            reserve.splice(j, 1);
                            break;
                        }
                    }                    
                }
            }            
        } else {
            answer ++;
        }

    }
    return answer;
}
