// https://level.goorm.io/exam/43241/%EA%B3%84%EC%82%B0%EA%B8%B0/quiz/1

rl.on("line", function(line) {
	// console.log(typeof line);
	const arr = line.split(" "),
				num1 = Number(arr[0]),
				num2 = Number(arr[2]);
	let result;
	// console.log(arr);
	switch (arr[1]) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = (num1 / num2).toFixed(2);
			break;
		default:
			console.log('사칙연산만 사용하세요');
	}
	console.log(result);
	// let average = arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
	rl.close();
}).on("close", function() {
	process.exit();
});
