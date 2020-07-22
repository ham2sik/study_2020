rl.on("line", function(line) {
	// array
	// var reverseText = line.split("").reverse().join('');
	// if (line === reverseText) {
	// 	console.log('Palindrome');
	// } else {
	// 	console.log('Not Palindrome');
	// }
	
	const arr = line.split(""),
				size = arr.length;
	let result = 'Palindrome';
	
	for (let i = 0; i < size; i ++ ) {
		if (arr[i] !== arr[size - 1 - i]) {
			result = 'Not Palindrome';
			break;
		}
	}
	console.log(result);
	
	rl.close();
}).on("close", function() {
	process.exit();
});
