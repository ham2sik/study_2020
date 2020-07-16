// https://level.goorm.io/exam/43255/%EC%95%BD%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

rl.on("line", function(line) {
	// console.log(typeof line);
	if (line <= 0) {
		console.log('양의 정수를 입력하세요.');
		return false;
	}
	line = Number(line);
	let resultArrs = [],
			reverseArrs = [];
	
	for (let i = 1; i <= line; i ++) {
		if (line % i === 0) {
			let quot = line / i;
			if (i > quot) {
				break;
			} else if (i != quot) {
				reverseArrs.push(quot);
			}
			resultArrs.push(i);
		}
	}
	// console.log(reverseArrs, resultArrs);
	reverseArrs.reverse();
	// console.log(reverseArrs, resultArrs);
	
	console.log(resultArrs.join(' ') + ' ' + reverseArrs.join(' ') + ' ');
	rl.close();
}).on("close", function() {
	process.exit();
});
