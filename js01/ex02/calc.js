const textbox = document.getElementById("name");
const numberbox = document.getElementById("price");
const membercheck = document.getElementById("member");
const membergrade = document.getElementById("kind");

function calculate(original)
{
	if (membergrade.disabled == true)
		return (original);
	if (membergrade.value == '0')
		return (original);
	const idx = membergrade.selectedIndex;
	const ret = Number(original) * (1 - Number(membergrade.options[idx].getAttribute("data-percent"))/100);
	return (String(ret));
}

function printItem(e)
{
	console.log("here");
	const data = document.getElementById(e.target.id).value;
	document.getElementById("item").innerText =data;
}

function printCost(e)
{
	// 돈 출력할 때 , 찍어야 함 + 소수점 처리 
	const data = (numberbox.value || 0);
	const discount_data = calculate(data);
	document.getElementById("cost").innerHTML = "<h3>" + "원가: " + data + "</h3>";
	document.getElementById("discount").innerHTML = "<h3>" + "할인가: " + discount_data + "</h3>";
}

function reActivategrade(e)
{
	if (membergrade.disabled == true)
		membergrade.disabled = false;
	else
		membergrade.disabled = true;
	printCost();
}

function showClock()
{
	const data = new Date();
	const timedata = data.toISOString();
	document.getElementsByTagName("time")[0].innerHTML=timedata;
}

function init()
{
	setTimeout(showClock, 1000);
	textbox.addEventListener("keypress", printItem);
	numberbox.addEventListener("change", printCost);
	membercheck.addEventListener("click", reActivategrade);
	membergrade.addEventListener("change", printCost);
}

init();
