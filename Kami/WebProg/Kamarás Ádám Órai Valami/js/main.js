function Calculus() {
	//Inputok
	let AszamInput = document.querySelector("input[name='Aszam-input']").value;
	let BszamInput = document.querySelector("input[name='Bszam-input']").value;
	let select = document.querySelector("select[name='calSelect']").value;
	let Vege = document.querySelector("input[name='result-input']");

	if (select.value == "0") {
		Vege.value == parseInt(AszamInput.value) + parseInt(BszamInput.value);
	}
}
//Errorok
// let AError = document.querySelector("span.Aerror");
// let BError = document.querySelector("span.Berror");
// let CuccError = document.querySelector("span.Cuccerror");
// //Eredmény
// let Vege = parseInt(AszamInput.textContent) * parseInt(BszamInput.textContent);

// if (AszamInput.value == "") {
// 	AError.innerHTML = "Nem adtad meg az 'A' számot";
// 	AszamInput.style.backgroundColor = "Lightpink";
// 	AszamInput.style.borderColor = "red";
// } else if (BszamInput.value == "") {
// 	BError.innerHTML = "Nem adtad meg a 'B' számot";
// 	BszamInput.style.backgroundColor = "Lightpink";
// 	BszamInput.style.borderColor = "red";
// } else {
// 	Result.innerHTML = Vege;
// }
