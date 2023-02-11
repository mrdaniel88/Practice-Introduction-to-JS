function getColor(colorNumber = 0) {
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {

	//your loop here
	for (let i=0; i<10; i++){
		let number = getColor(Math.floor(Math.random() * 3) +1);
		console.log(number);
	}
	
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

