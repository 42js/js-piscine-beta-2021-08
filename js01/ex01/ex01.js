
const cnt = { time: 0 };
function doRotate(){
	getValue("poo");
	getValue("coding");
	getValue("hungry");
	getValue("love");
	getValue("energy");
	getValue("wash");
	if (cnt.time >= 5)
		cnt.time = 0;
	else
		cnt.time++;
}

function getValue(str){
	let num;
	let max;

	num = document.getElementById(str).value;
	max = document.getElementById(str).max;
	if (cnt.time < 5){
		num -= 10;
		if (num < 0)
			num = 0;
		document.getElementById(str).value = num;
	}
	else{
		num += 5;
		if (max < num)
			num = max;
		document.getElementById(str).value = num;
	}
}

window.onload = setInterval(doRotate, 1000);
