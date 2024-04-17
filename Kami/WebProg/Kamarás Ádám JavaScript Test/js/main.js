function formReset() {
	price.value = "";
	priceInput.value = "";
	location.reload();
}
function showPriceTable() {
	document.getElementById("priceTable").style.display = "block";
	document.getElementById("priceTable").scrollIntoView({ behavior: "smooth" });
}

function calcAmount() {
	let selectTop = document.querySelectorAll("option:checked")[0].innerHTML;

	let priceInput = document.querySelector("input[name='price-input']");
	let amountInput = document.querySelector("input[name='amount-input']");

	let showAmount = document.querySelector("span.show-amount");

	let priceError = document.querySelector("span.price-error");
	let amountError = document.querySelector("span.amount-error");

	let tableTop = document.querySelector("td.td-top");
	let tablePrice = document.querySelector("td.td-price");
	let tableAmount = document.querySelector("td.td-amount");
	let tableSum = document.querySelector("td.td-sum");
	//debugger;
	let amount = parseInt(amountInput.value) * parseInt(priceInput.value);

	if (priceInput.value == "") {
		priceError.innerHTML = "Nem adtál meg árat";
		priceInput.style.backgroundColor = "Lightpink";
		priceInput.style.borderColor = "red";
	} else if (amountInput.value == "") {
		amountError.innerHTML = "Nem adtál meg mennyiséget";
		amountInput.style.backgroundColor = "Lightpink";
		amountInput.style.borderColor = "red";
	} else if (amountInput.value < 1) {
		amountError.innerHTML = "Legalább egyet rendelned kell";
	} else if (amountInput.value > 10) {
		amountError.innerHTML = "Tíznél többet nem rendelhetsz";
	}
	//else if(selectTop.value="0")
	//{
	//selectError.innerHTML="Válassz feltétet!";
	//}
	else {
		showAmount.innerHTML = amount;

		amountError.innerHTML = "";
		priceError.innerHTML = "";

		priceInput.style.backgroundColor = "white";
		amountInput.style.backgroundColor = "white";
		amountInput.style.borderColor = "";
		priceInput.style.borderColor = "";

		tableTop.innerHTML = selectTop;
		tablePrice.innerHTML = priceInput.value + " FT";
		tableAmount.innerHTML = amountInput.value + " DB";
		tableSum.innerHTML = amount + " FT";

		showPriceTable();

		const formData = {
			selectedOption: selectTop,
			price: priceInput.value,
			amount: amountInput.value,
		};

		const formDataJSON = JSON.stringify(formData, null, 2);
		localStorage.setItem("testJSON", formDataJSON);
		console.log(formDataJSON);
	}
}

// function formReset() {
// 	amountInput.value = "";
// 	priceInput.value = "";
// 	location.reload();
// }

// function showPriceTable() {
// 	document.getElementById("priceTable").style.display = "block";
// 	document.getElementById("priceTable").scrollIntoView({ behavior: "smooth" });
// }

// function calcAmount() {
// 	// debugger;
// 	let selecTop = document.querySelectorAll("option:checked")[0].innerHTML; //table
// 	let priceInput = document.querySelector("input[name='price-input']"); //price
// 	let amountInput = document.querySelector("input[name='amount-input']"); //price
// 	let showAmount = document.querySelector("span.show-amount");
// 	let priceError = document.getElementById("priceError");
// 	let amountError = document.querySelector("span.amount-error");
// 	// ..
// 	let tableTop = document.querySelector("td.td-top");
// 	let tablePrice = document.querySelector("td.td-price");
// 	let tableAmount = document.querySelector("td.td-amount");
// 	let tableSum = document.querySelector("td.td-sum");
// 	let amount = parseInt(amountInput.value) * parseInt(priceInput.value);

// 	if (priceInput.value == "") {
// 		priceError.innerHTML = "Nem adtál meg árat";
// 		priceInput.style.backgroundColor = "Lightpink";
// 		priceInput.style.borderColor = "red";
// 	} else if (amountInput.value == " ") {
// 		amountError.innerHTML = "Nem adtál meg mennyiséget";
// 		amountInput.style.backgroundColor = "Lightpink";
// 		amountInput.style.borderColor = "red";
// 	} else if (amountInput.value < 1) {
// 		amountError.innerHTML = "Legalább egyet rendelned kell";
// 	} else if (amountInput.value < 10) {
// 		amountError.innerHTML = "Tíznél többet nem rendelhetsz";
// 	} else {
// 		showAmount.innerHTML = amount;
// 		priceError.innerHTML = "";
// 		amountError.innerHTML = "";
// 		amountInput.style.backgroundColor = "white";
// 		amountInput.style.backgroundColor = "white";
// 		priceInput.style.borderColor = "white";
// 		amountInput.style.borderColor = "white";
// 		tableTop.innerHTML = selecTop;
// 		tablePrice.innerHTML = priceInput.value + " Ft";
// 		tableAmount.innerHTML = amountInput.value + " db";
// 		tableSum.innerHTML = amount + " Ft";
// 		showPriceTable();
// 		const formData = {
// 			selecOption: selecTop,
// 			price: priceInput.value,
// 			amount: amountInput.value,
// 		};

// 		const formDataJSON = JSON.stringify(formData, null, 2);
// 		localStorage.setItem("testJason", formDataJSON);
// 		console.log(formDataJSON);
// 	}
// }

// // 	if (priceInput.value == "") {
// // 		document.getElementById("priceInput").style.backgroundColor = "Lightpink";
// // 		document.getElementById("priceError").style.display = "block";
// // 	} else if (amountInput.value == "") {
// // 		document.getElementById("amountInput").style.backgroundColor = "Lightpink";
// // 		document.getElementById("amountError").style.display = "block";
// // 	} else if (amountInput.value < 1) {
// // 		document.getElementById("amountInput").style.backgroundColor = "Lightpink";
// // 		document.getElementById("amountError").style.display = "block";
// // 		document.getElementById("amountError").innerHTML = "Nem lehet kevesebb 1-nél a darabszám!";
// // 	} else if (amountInput.value > 10) {
// // 		document.getElementById("amountInput").style.backgroundColor = "Lightpink";
// // 		document.getElementById("amountError").style.display = "block";
// // 		document.getElementById("amountError").innerHTML = "Nem lehet több 10-nél a darabszám!";
// // 	} else {
// // 		document.getElementById("amountInput").style.backgroundColor = "white";
// // 		document.getElementById("amountError").style.display = "none";
// // 		document.getElementById("amountError").innerHTML = "Nem adtál meg mennyiséget!";
// // 		document.getElementById("priceInput").style.backgroundColor = "white";
// // 		document.getElementById("priceError").style.display = "none";
// // 		document.querySelector("span.show-amount").innerHTML = amount;
// // 		document.querySelector("td.td-top").innerHTML = selecTop;
// // 		document.querySelector("td.td-price").innerHTML = priceInput.value + "Ft";
// // 		document.querySelector("td.td-amount").innerHTML = amountInput.value + "db";
// // 		document.querySelector("td.td-sum").innerHTML = amount + "Ft";
// // 		showPriceTable();
// // 		// Űrlap adatok írása Jason adat formátumba
// // 		const formData = {
// // 			selectedOption: selecTop,
// // 			price: priceInput.value,
// // 			amount: amountInput.value,
// // 		};

// // 		const formDataJSON = JSON.stringify(formData, null, 2);
// // 		localStorage.setItem("testJason", formDataJSON);
// // 		console.log(formDataJSON);
// // 	}
// // }

// // alert("Füli Buta");
// // console.log("Ez itt egy konzol üzenet");
// // let price1 = 34.5;
// // let price2 = 34.5;
// // let total = price1 + price2;
// // alert("Az árak összege:" + total);
// // let ar = document.querySelector("input[name='ar-input']");
// // let amountInput = document.querySelector("input[name='amount-input']");
// // let amount = parseInt(amountInput.value) * parseInt(arInput.value);
// // alert("Fizetendő: " + amount + "Ft")
// // function formReset(){
// //     priceInput.value = "";
// //     amountInput.value = "";
// //     location.reload();
// // }
// // function calcaAmount() {
// //    let priceInput = document.querySelector("input[name='price-input']");
// //    let amountInput = document.querySelector("input[name='amount-input']");

// //    let amount = parseInt(amountInput.value) * parseInt(priceInput.value);
// // }
// // if (priceInput.value == ""){
// //     alert("Nem adtál meg árat")
// // }
// // else if(amountInput.value){
// //     alert("Nem adtál meg mennyiséget!")
// // }
// // else{
// //     alert("A megrendelés végösszege:" + amount + "Ft")
// // }
// // function formReset() {
// // 	price.value = "";
// // 	amountInput.value = "";
// // 	location.reload();
// // }

// // function calcAmount() {
// // 	let selectTop = document.querySelector("option:checked")[0].innerHTML;
// // 	let amountInput = document.querySelector("input[name='amount-input']");
// // 	let priceInput = document.querySelector("input[name='price-input']");
// // 	let showAmount = document.querySelector("span.show-amount");
// // 	let priceError = document.querySelector("span.price-error");
// // 	let amountError = document.querySelector("span.amount-error");
// // 	let amount = parseInt(amountInput.value) * parseInt(priceInput.value);
// // 	let tableTop = document.querySelector("td.td-feltet");
// // 	let tablePrice = document.querySelector("td.td-egysar");
// // 	let tableAmount = document.querySelector("td.td-mennyi");
// // 	let tableSum = document.querySelector("td.td-sum");

// // 	if (priceInput.value == "") {
// // 		priceError.style.display = "block";
// // 		priceInput.style.backgroundColor = "Lightpink";
// // 	} else if (amountInput.value == "") {
// // 		amountError.innerHTML = "Nem adtál meg mennyiséget!";
// // 		amountError.style.backgroundColor = "lightpink";
// // 		amountInput.style.BorderColor = "red";
// // 	} else if (amountInput.value < 1) {
// // 		alert("Legalább egyet kell rendelni");
// // 		amountInput.value = "";
// // 		showAmount.innerHTML = 0;
// // 	} else {
// // 		priceError.style.display = "none";
// // 		amountError.style.display = "none";
// // 		priceInput.style.backgroundColor = "white";
// // 		amountInput.style.backgroundColor = "white";
// // 		showAmount.innerHTML = amount;
// // 		tableTop.innerHTML = selectTop;
// // 	}
// // }
// //alert("Nem adtál meg mennyiséget!");
// //document.getElementById("amountInput").style.backgroundColor="Lightpink";
// //alert("A rendelés végösszege: "+amount+" Ft.");
// //alert("Nem adtál meg árat!");
// //priceError.innerHTML="Nem adtál meg árat!";
// //document.getElementById("priceInput").style.backgroundColor="Lightpink";
