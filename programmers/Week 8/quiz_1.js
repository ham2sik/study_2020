// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => b - a);
    // console.log(people);
    var minWeightNum  = people.length - 1;
    
    for (let i = 0; i < people.length; i ++) {
        if (i <= minWeightNum) {
            if (people[i] + people[minWeightNum] <= limit) {
                minWeightNum --;
            }
            answer ++;
        } else {
            break;
        }
    }
    
    return answer;
}
