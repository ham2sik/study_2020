// https://level.goorm.io/exam/43268/%EC%A0%84%EA%B8%B0%EC%9A%94%EA%B8%88/quiz/1

rl.on("line", function(line) {
	console.log(typeof line);
	line = Number(line);
	if (line < 0) {
		console.log('전기 사용량은 0 이상입니다.');
		return false;
	}
	if (line < 100) {
		line = line * 0.5 / 100;
	} else if (line < 200) {
		line = line * 0.7 / 100;
	} else if (line < 300) {
		line = line * 0.9 / 100;
	} else {
		line = line * 1 / 100;
	}
	console.log(line.toFixed(2));
	rl.close();
}).on("close", function() {
	process.exit();
});
