//Matek gep Javascript kódja
//Fejlesztő: Kamarás Ádám

function formReset() {
	document.getElementById("calcForm").reset();
	errorMessage.innerHTML = "";
	location.reload();
}

let result = 0;
let errorMessage = document.getElementById("errorMessage");
let inputA = document.querySelector("input[name='numA']");
let inputB = document.querySelector("input[name='numB']");
let output = document.querySelector("span.eredmeny");
let listOp = document.querySelector("option:checked")[0].innerHTML;

function calcNum() {
	result = eval(parseFloat(inputA.value) + listOp + parseFloat(inputB.value));
	if (isNaN(result)) {
		errorMessage.innerHTML = "Nem adtál meg értéket!";
		output.innerHTML = "0";
	} else {
		errorMessage.innerHTML = "";
		if (Number.isInteger(result)) {
			output.value = result.toFixed(0);
		} else {
			output.value = result.toFixed(5);
		}
	}
}
