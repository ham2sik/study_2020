// 입력 받은 10진수를 16진수로 출력하는 프로그램을 작성하십시오.

rl.on("line", function(line) {
	console.log(typeof line, line);
	console.log(Number(line).toString(16));
	rl.close();
}).on("close", function() {
	process.exit();
});
