// https://level.goorm.io/exam/43196/%EC%84%B8%EB%A1%9C-%EC%88%9C%EC%84%9C-%EC%82%AC%EA%B0%81%ED%98%95/quiz/1

rl.on("line", function(line) {
	if (line > 20) {
		return false;
	}
	let output = '';
	for (let i = 1; i <= line; i ++) {
		for (let j = 0; j < line; j ++) {
			output += Number(i + line * j) + ' ';
		}
		console.log(output);
		output = '';
	}
	rl.close();
}).on("close", function() {
	process.exit();
});
