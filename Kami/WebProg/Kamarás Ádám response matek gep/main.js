//Online Számológép by Kurva Anyád
//Licenc információk (pl.: freeware, shareware, pl.:GNU FPL)
document.getElementById("sciOps").style.display = "none";
document.getElementById("btnSci").style.display = "none";
//Számológép alaphelyzetbe állítása
function calcReset() {
	location.reload();
}

//HTML elemek elérése változókban
let inputA = document.querySelector("input[name='numA']");
let inputB = document.querySelector("input[name='numB']");
let errorMessage = document.querySelector("span.err-msg");
let output = document.querySelector("span.out");
let modeText = document.querySelector("span.mode-text");
let lstSci = document.getElementById("sciOps");
let lstSel = document.getElementById("selOps");
let sciBox = document.getElementById("cbSci");

//Tudományos mód műveleti lista letiltása.
lstSci.style.display = "none";
sciBox.checked = false;

//Számolási logika megvalósítása
function calcNum() {
	debugger;
	let listOps = selOps.options[selOps.selectedIndex].innerHTML;
	//Számolási logika id-else algoritmussal
	if (inputA.value == "" || inputB.value == "") {
		errorMessage.innerHTML = "Nem adtál meg értéket!";
	} else {
		errorMessage.innerHTML = "";

		/*if(listOps == "+"){
            output.innerHTML = parseFloat(inputA.value) + parseFloat(inputB.value);
        }
        else if(listOps == "-"){
            output.innerHTML = parseFloat(inputA.value) - parseFloat(inputB.value);
        }
        else if(listOps == "*"){
            output.innerHTML = parseFloat(inputA.value) * parseFloat(inputB.value);
        }
        else if(listOps == "/"){
            output.innerHTML = parseFloat(inputA.value) / parseFloat(inputB.value);
        }*/

		switch (listOps) {
			case "+":
				output.innerHTML = Add(inputA.value, inputB.value);
				break;
			case "-":
				output.innerHTML = Sub(inputA.value, inputB.value);
				break;
			case "*":
				output.innerHTML = Multi(inputA.value, inputB.value);
				break;
			case "/":
				output.innerHTML = Div(inputA.value, inputB.value);
				break;
		}

		//Számolási logika eval() függvénnyel
		/*let result = eval(parseFloat(inputA.value) + listOps + parseFloat(inputB.value));
        output.innerHTML = result.toFixed(5);*/
	}
}

//Számolási logika függvényekkel
function Add(a, b) {
	return a + b;
}

function Sub(a, b) {
	return a - b;
}

function Multi(a, b) {
	return a * b;
}

function Div(a, b) {
	return a / b;
}

//A számológép átkacsolása tudományos módba
function swToSci() {
	debugger;
	errorMessage.innerHTML = "";
	inputA.value = "";
	inputB.value = "";
	output.innerHTML = "0";
	let sciBox = document.getElementById("cbSci");
	modeText.innerHTML = "[Tudományos mód]";
	if (sciBox.checked == true) {
		letSci.style.display = "block";
		letSel.style.display = "none";
	} else {
		modeText.innerHTML = "[Normál mód]";
		letSci.style.display = "none";
		letSel.style.display = "Block";
		inputB.removeAttribute("disabled");
	}
}

function calcSci() {
	let listSciOps = parseInt(document.getElementById("sciOps").value);
	//Számolási logika id-else algoritmussal
	if (inputA.value == "" || inputB.value == "") {
		errorMessage.innerHTML = "Nem adtál meg értéket!";
		output.innerHTML = "0";
	} else {
		errorMessage.innerHTML = "";
		switch (listSciOps) {
			case "0":
				output.innerHTML = Percentage(inputA.value, inputB.value);
				break;
			case "1":
				output.innerHTML = Power(inputA.value, inputB.value);
				break;
			case "2":
				output.innerHTML = squareRoot(inputA.value);
				break;
			case "3":
				output.innerHTML = cubeRoot(inputA.value);
				break;
			case "4":
				output.innerHTML = log(inputA.value);
				break;
			case "5":
				output.innerHTML = Sin(inputA.value);
				break;
			case "6":
				output.innerHTML = Cos(inputA.value);
				break;
			case "7":
				output.innerHTML = Tan(inputA.value);
				break;
		}
	}
}

function Percentage(a, b) {
	return Math.Percentage(a, b);
}

function Power(a, b) {
	let pwResult = a ** b;
	return pwResult;
}

function squareRoot(a) {
	return Math.sqrt(a);
}

function cubeRoot(a) {
	return Math.cbrt(a);
}

function log(a) {
	return Math.log(a);
}

//Szinusz, koszinusz, tangens kiszámítása "Arrow function" alkalmazásával
let Sin = (a) => Math.sin((a * Math.PI) / 180).toFixed(5);

let Cos = (a) => Math.cos((a * Math.PI) / 180).toFixed(5);

let Tan = (a) => Math.tan((a * Math.PI) / 180).toFixed(5);

// //Online számológép by Kami
// //Licenc információk (pl.: freeware, shareware, pl: GNU GPL)
// document.getElementById("sciOps").style.display = "none";
// document.getElementById("btnSci").style.display = "none";

// //Matek gep alaphelyzetbe
// function calcReset() {
// 	location.reload();
// }

// //HTML elemek elérése változókban.
// let inputA = document.querySelector("input[name='numA']");
// let inputB = document.querySelector("input[name='numB']");
// let errMsg = document.querySelector("span[name='errmsg']");
// let output = document.querySelector("span[name='out']");
// let modeText = document.querySelector("span[name='modeTXT']");
// let lstSci = document.getElementById("sciOps");
// let lstSel = document.getElementById("selOps");
// let sciBox = document.getElementById("cbSci");

// //Számolási logika megvalósítása
// function calcNum() {
// 	debugger;
// 	let listOps = selOps.options[selOps.selectedIndex].innerHTML;
// 	//let tudOps = sciOps.options[sciOps.selectedIndex].innerHTML;
// 	//Számolási logika if-else algoritmussal.
// 	if (inputA.value == "" || inputB.value == "") {
// 		errMsg.innerHTML = "Nem adtál értéket";
// 	} else {
// 		errMsg.innerHTML = "";
// 		/*
// 		 	if (listOps == "+") {
// 				output.innerHTML = parseFloat(inputA.value) + parseFloat(inputB.value);
// 		 	} else if (listOps == "-") {
// 				output.innerHTML = parseFloat(inputA.value) - parseFloat(inputB.value);
// 		 	} else if (listOps == "*") {
// 		 		output.innerHTML = parseFloat(inputA.value) * parseFloat(inputB.value);
// 		 	} else if (listOps == "/") {
// 		 		output.innerHTML = parseFloat(inputA.value) / parseFloat(inputB.value);
// 		 	}
//         } */
// 		switch (listOps) {
// 			case "+":
// 				output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 				break;
// 			case "-":
// 				output.innerHTML = Sub(parseFloat(inputA.value), parseFloat(inputB.value));
// 				break;
// 			case "*":
// 				output.innerHTML = Multi(parseFloat(inputA.value), parseFloat(inputB.value));
// 				break;
// 			case "/":
// 				output.innerHTML = Div(parseFloat(inputA.value), parseFloat(inputB.value));
// 				break;
// 		}
// 		// switch (tudOps) {
// 		// 	case "%":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "x^":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "√":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "∛":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "log":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "sin":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "cos":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// 	case "tan":
// 		// 		output.innerHTML = Add(parseFloat(inputA.value), parseFloat(inputB.value));
// 		// 		break;
// 		// }
// 		/*
// 		let result = eval(parseFloat(inputA.value) + listOps + parseFloat(inputB.value));
// 		output.innerHTML = result.toFixed(5); */
// 	}
// }

// //Számolási logika függvényekkel.
// function Add(a, b) {
// 	return a + b;
// }
// function Sub(a, b) {
// 	return a - b;
// }
// function Multi(a, b) {
// 	return a * b;
// }
// function Div(a, b) {
// 	return a / b;
// }

// function swToSci() {
// 	errMsg.innerHTML = "";
// 	inputA.value = 0;
// 	inputB.value = 0;
// 	let sciBox = document.getElementById("sbSci");
// 	if (sciBox.checked == true) {
// 		modeText.innerHTML = "[Tudományos mód]";
// 		document.getElementById("sciOps").style.display = "block";
// 		document.getElementById("selOps").style.display = "none";
// 		document.getElementById("btnDef").style.display = "none";
// 		document.getElementById("btnSci").style.display = "block";
// 	} else {
// 		modeText.innerHTML = "[Normál mód]";
// 		document.getElementById("sciOps").style.display = "none";
// 		document.getElementById("selOps").style.display = "block";
// 		document.getElementById("btnDef").style.display = "block";
// 		document.getElementById("btnSci").style.display = "none";
// 	}
// }

// function calcSci() {
// 	let listSciOps = document.getElementById("sciOps").value;
// 	if ((inputA.value = "" + inputB.value == "")) {
// 		errMsg.innerHTML = "Nem adtál meg értéket";
// 		output.innerHTML = "0";
// 	} else {
// 	}
// }

// //Tudományos számolás
// function Percentage(a, b) {
// 	let peResult = (100 * b) / a;
// 	return peResult;
// }
// function Power(a, b) {
// 	let pwResult = a ** b;
// 	return pwResult;
// }
// function squareRoot(a, b) {
// 	let sqResult = math.sqrt(a);
// 	return sqResult;
// }
// function cubeRoot(a, b) {
// 	let cbResult = math.cbrt(a);
// 	return cbResult;
// }
// function log(a, b) {
// 	let lgResult = math.log(a);
// 	return lgResult;
// }

// //Sinus kiszámítása (arrow function) használatval.
// let sin = (a) => math.sin(a);

// //Cosinus kiszámítása (arrow function) használatval.
// let cos = (a) => math.cos(a);

// //Tangens kiszámítása (arrow function) használatval.
// let tan = (a) => math.tan(a);

// function Calc() {
// 	if (sciBox.checked == false) {
// 		calcNum();
// 	} else {
// 		calcSci();
// 	}
// }
