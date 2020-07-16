// https://level.goorm.io/exam/43226/16%EC%A7%84%EC%88%98/quiz/1

rl.on("line", function(line) {
	console.log(typeof line, line);
	console.log(Number(line).toString(16));
	rl.close();
}).on("close", function() {
	process.exit();
});
