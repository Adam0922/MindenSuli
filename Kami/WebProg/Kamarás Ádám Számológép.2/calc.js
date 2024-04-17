function formReset() {
	document.getElementById("calcForm").reset();
	errorMessage.innerHTML = "";
	location.reload();
}

function calcNum() {
	var inputA = parseInt(document.getElementById("numA").value);
	var inputB = parseInt(document.getElementById("numB").value);
	var listOp = document.getElementById("operators").value;
	var output = parseInt(document.querySelector("span.eredmeny"));

	// result = eval(parseFloat(inputA) + listOp + parseFloat(inputB));
	// if (isNaN(result)) {
	// 	errorMessage.innerHTML = "Nem adtál meg értéket!";
	//     output.innerHTML="0";
	// }else {
	// 	errorMessage.innerHTML = "";
	//     }
	// 	if (Number.isInteger(result)) {
	// 		output.value = result.toFixed(0);
	// 	} else {
	// 		output.value = result.toFixed(5);
	// 	}
	// }

	if (listOp === "+") {
		var inputB = (document.getElementById("result").value = inputA + inputB);
		output.innerHTML = inputB;
	}
	if (listOp === "-") {
		var inputB = (document.getElementById("result").value = inputA - inputB);
		output.innerHTML = inputB;
	}
	if (listOp === "*") {
		var inputB = (document.getElementById("result").value = inputA * inputB);
		output.innerHTML = inputB;
	}
	if (listOp === "/") {
		var inputB = (document.getElementById("result").value = inputA / inputB);
		output.innerHTML = inputB;
	}
}
