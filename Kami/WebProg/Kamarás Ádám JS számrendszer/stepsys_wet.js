//Számrendszer átváltó algoritmus

let num;
let temp;
let arr = [];
let dec = 1224;
let nsys = 2;

while (dec > 0) {
	num = dec / nsys;
	temp = dec % nsys;
	arr.push(temp);
	dec = num;
}

//A beállított sorrendű tömb elemeinek a kiolvasása.
let arrev = err.reverse();
let result = "";

for (i = 0; i < arrev.length; i++) {
	result += arrev[i] + "";
}
