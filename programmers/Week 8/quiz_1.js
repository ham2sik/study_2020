// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    // console.log(people);
    
    function count(peopleArray) {
        if (limit - peopleArray[0] >= peopleArray[0]) {
            var peopletLength = peopleArray.length;
            for (let i = 0; i < peopletLength; i ++) {
                // console.log(i);
                var arrayNum = peopletLength - 1 - i;
                if (peopleArray[0] + peopleArray[arrayNum] > limit) {
                    answer ++;
                    people.splice(arrayNum, 1);
                } else {
                    answer ++;
                    people.splice(arrayNum, 1);
                    people.splice(0, 1);
                    count(people);
                    break;
                }
            } 
        } else {
            answer = answer + peopleArray.length;
        }
    }
    
    if (people.length > 1) {
        count(people);
    } else {
        answer ++;
    }
    
    return answer;
}
