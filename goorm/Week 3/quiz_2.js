// https://level.goorm.io/exam/43168/%EC%95%94%ED%98%B8%EC%9D%98-%EA%B0%9C%EC%88%98/quiz/1

rl.on("line", function(line) {
	const arr = line.split(" ").map(Number),
				a = arr[0],
				b = arr[1],
				n = arr[2];
	let result = 0;
	for (let i = a; i <= b; i ++ ) {
		result = result + Math.pow(n, i);
	}
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});
