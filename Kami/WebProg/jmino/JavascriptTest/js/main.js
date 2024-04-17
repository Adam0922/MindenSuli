//Kamarás Ádám
function formReset() {
	price.value = "";
	priceInput.value = "";
	location.reload();
}

function showPriceTable() {
	document.getElementById("priceTable").style.display = "block";
	document.getElementById("priceTable").scrollIntoView({ behavior: "smooth" });
}

function Multiply(a, b) {
	return a * b;
}

let tableIndex = 0;
function calcAmount() {
	//debugger;
	let selectTop = document.querySelectorAll("option:checked")[0].innerHTML;
	let priceInput = document.querySelector("input[name='price-input']");
	let amountInput = document.querySelector("input[name='amount-input']");
	let showAmount = document.querySelector("span.show-amount");
	let priceError = document.querySelector("span.price-error");
	let amountError = document.querySelector("span.amount-error");
	//Az összesítő táblázat celláinak az elérése
	let tableTop = document.querySelector("td.td-top");
	let tablePrice = document.querySelector("td.td-price");
	let tableAmount = document.querySelector("td.td-amount");
	let tableSum = document.querySelector("td.td-sum");
	let total = Multiply(parseInt(priceInput.value), parseInt(amountInput.value));
	tableIndex++;
	//Terminális operátor
	total = isNaN(total) ? 0 : total;

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
		showAmount.innerHTML = total;

		amountError.innerHTML = "";
		priceError.innerHTML = "";

		priceInput.style.backgroundColor = "white";
		amountInput.style.backgroundColor = "white";
		amountInput.style.borderColor = "";
		priceInput.style.borderColor = "";

		tableTop.innerHTML = selectTop;
		tablePrice.innerHTML = priceInput.value + " FT";
		tableAmount.innerHTML = amountInput.value + " DB";
		tableSum.innerHTML = total + " FT";

		showPriceTable();

		const formData = {
			selectedOption: selectTop,
			price: priceInput.value,
			amount: amountInput.value,
			sum: total,
		};

		const formDataJSON = JSON.stringify(formData, null, 2);
		localStorage.setItem("testJSON", formDataJSON);
		console.log(formDataJSON);

		//Űrlap adatok kiolvasása a helyi tárolóból objektumba.
		let getFormDataJSON = localStorage.getItem("testJSON");

		//Űrlap adatok stringgé konvertálása objektumból.
		let stringFromObject = JSON.parse(getFormDataJSON);

		console.log(stringFromObject);
		console.log(stringFromObject.selectedOption);
		console.log(stringFromObject.price);
		console.log(stringFromObject.amount);
		console.log(stringFromObject.sum);

		//Objektum adatok kiírása for ciklussal
		for (key in stringFromObject) {
			if (stringFromObject.hasOwnProperty(key)) {
				value = stringFromObject[key];
				console.log(key, value);
			}
		}

		//Objektum adatok tömbbe írása
		let arr = [];
		for (let key in stringFromObject) {
			arr.push(stringFromObject[key]);
			console.log(arr);
		}

		//A tömb elemeinek kiolvasása (arrow function)
		arr.forEach((arrElement) => {
			console.log(arrElement);
		});

		fillDataTable();
		readTableDataToJson();
	}

	//HTML táblázat feltöltése közvetlenül az objektumból
	function fillDataTable() {
		var inputData = [
			{
				hmIndex: tableIndex,
				hmTop: selectTop,
				hmPrice: priceInput.value,
				hmAmount: amountInput.value,
				hmSum: total,
			},
		];

		//Objektum adatainak a megjelenítése dinamikusan létrehozott HTML táblázatban.
		//A táblázat referenciájának a megszerzése
		var table = document.getElementById("hmTable");

		//A táblázat törzse referenciájának a megszerzése
		var tableBody = table.getElementsByTagName("tbody")[0];

		//A táblázatsor létrehozása.
		var row = tableBody.insertRow();

		//Az objektum értékeinek a hozzáadás a táblázathoz.
		for (var i = 0; i < inputData.length; i++) {
			var hmItem = inputData[i];

			var indexCell = row.insertCell(-1);
			indexCell.innerHTML = hmItem.hmIndex;
			indexCell.style.backgroundColor = "blue";
			indexCell.style.color = "white";

			var topCell = row.insertCell(-1);
			topCell.innerHTML = hmItem.hmTop;

			var priceCell = row.insertCell(-1);
			priceCell.innerHTML = hmItem.hmPrice;

			var amountCell = row.insertCell(-1);
			amountCell.innerHTML = hmItem.hmAmount;

			var sumCell = row.insertCell(-1);
			sumCell.innerHTML = hmItem.hmSum;
		}
	}
}

function readTableDataToJson() {
	var $table = $("#hmTable");
	var rows = [];
	var header = [];

	$table.find("thead th").each(function () {
		header.push($(this).html());
	});

	$table.find("tbody tr").each(function () {
		var row = {};

		$(this)
			.find("td")
			.each(function (i) {
				var key = header[i];
				value = $(this).html();

				row[key] = value;
			});
		rows.push(row);
	});
	alert(JSON.stringify(rows));
}
