// Function to generate  20 lotto tickets' numbers
const generator = () => {
	let tickets = [];
	var winning_tickets = 0;

	while(tickets.length < 20){

		// Generating a positive whole number
		let t = Math.floor(Math.random() * 1000);

		// Checking if the generated number can be a winning number
		// in order to keep track of winning number in the array

		if(winning_tickets <  3){
			if (winning(digitizer(t))){
				winning_tickets += 1;
				console.log(t);
			}

			tickets.push(t);
		}

		else {
			if (!(winning(digitizer(t)))){
				tickets.push(t);

			}
		}

		
	}

	for (var i = 0; i < tickets.length; i++)
	{
		numberList = "<li>" + tickets[i] + "</li>";
		document.getElementById("numbers").innerHTML += numberList;
	}

	document.getElementById("loto-number").disabled = false;
	document.getElementById("checker-button").disabled = false;

	console.log(tickets);
	console.log("Winning tickets in the sequence: " + winning_tickets);
}


// Function to check if the number is a winning number or not 
const checker = () => {
	// retrieving the given number from the input box
	let loto_number = document.getElementById('loto-number').value;

	// First check if the input is a positive whole number
	if(validate(loto_number)){
		// exploding the given number in individual digits
		digits = digitizer(loto_number);

		// informing the end user if it's a winning number or not
		if (winning(digits)) {
			document.getElementById("result").innerHTML = "It is a winning number";
		} 

		else{
			document.getElementById("result").innerHTML = "It is not a winning number";
		}
	}

	else{
		alert("The input is not a positive whole number");
	}
}

//Function to put all individual digits of a number in an array
const digitizer = (number) => {
	let digits = [];

	while (number > 0) {
		digits.push(number % 10);
		number = parseInt(number / 10);
	}

	// reversing the array since digits were obtained from the last
	digits.reverse();

	return digits;

}

// THE WINNING Function
const winning = ( digits ) => {
	let last_number; 

	while ( digits.length > 1) {
		
		let total=0;
		
		for(var i in digits) {
			total += digits[i] * digits[i]; 
		}

		// digits = total;
		last_number = total;
		digits = digitizer (total);

	}

	// Returning true or false
	if (last_number === 1){
		return true;
	}

	else {
		return false;
	}
}


// Function that validates input number
const validate = (num) =>{
	
	if ((num % 1 == 0) && num >= 0) {
		return true;
	}
	else{
		return false;
	}
}


