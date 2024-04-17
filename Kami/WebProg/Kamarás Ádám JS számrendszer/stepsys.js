//Számrendszer átváltó modul fejlesztés.

let num;
let temp;
let arr = [];
let alapszam = document.getElementById("alap");
let output = document.getElementById("res");
let szamrendki = document.getElementById("rend");
output.innerHTML = "";

function Convert(dec, nsys) {
	szamrendki.innerHTML = nsys;
	alapszam.innerHTML = dec;

	while (dec > 0) {
		num = parseInt(dec / nsys);
		temp = dec % nsys;

		if (temp > 9) {
			temp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"][temp - 10];
		}

		arr.push(temp);
		dec = num;
	}

	// Megfordítjuk a tömböt, és összefűzzük a stringet
	let arrev = arr.reverse();
	let result = "";
	for (let i = 0; i < arrev.length; i++) {
		result += arrev[i];
	}
	return result;
}
output.innerHTML = Convert(1500, 16);
