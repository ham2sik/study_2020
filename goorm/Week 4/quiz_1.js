// https://level.goorm.io/exam/43142/%EC%88%AB%EC%9E%90-%EB%92%A4%EC%A7%91%EA%B8%B0/quiz/1

rl.on("line", function(line) {
	console.log(Number(line.split("").reverse().join('')));
	rl.close();
}).on("close", function() {
	process.exit();
});
