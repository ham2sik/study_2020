// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5],
          pattern2 = [2, 1, 2, 3, 2, 4, 2, 5],
          pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0], // 정답갯수 카운트
        maxPoint = 0, // 최고점수
        answer = [];

    answers.map((value, index) => {
        // answers에서 각 pattern1~3을 비교 정답일 경우 카운트 +1
        if(value == pattern1[index % pattern1.length]) count[0]++;
        if(value == pattern2[index % pattern2.length]) count[1]++;
        if(value == pattern3[index % pattern3.length]) count[2]++;       
    });
    maxPoint = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < 3; i++) {
        if(maxPoint == count[i]) answer.push(i + 1);
    }

    return answer;
}
