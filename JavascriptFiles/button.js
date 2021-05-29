var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");


numOne.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value);
	var two = parseFloat(numTwo.value);
	var sum = one+two;
	alert(sum);
}


