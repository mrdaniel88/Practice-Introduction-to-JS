//fix this function:
function startCounting() {
	let counter = 100;
	while (counter <= 100) {
		console.log(counter);
		counter--;
		if (counter < 0) {
			return counter;
		}
	}

	
}

startCounting();