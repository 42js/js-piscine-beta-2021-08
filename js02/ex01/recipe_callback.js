const receipe = {
		dough : 3000,
		p1st : 5000,
		shaping : 4200,
		p2nd : 2000,
		frying : 5000,
	};

const process = {
		dough : false,
		p1st : false,
		shaping : false,
		p2nd : false,
		frying : false,
};

function randomFail()
{
	if (Math.random() < 0.5)
		throw "제작 실패..!(월급이 삭감되었다 ㅜㅠ)";
}

function printproc(proc)
{
	console.log(proc + " 끝.");
	process[proc] = true;
}

function doUntilSuccess(func, proc)
{
	try
	{
		randomFail();
		setTimeout(printproc, receipe[proc], proc);
	}
	catch (e)
	{
		console.error(proc + " " + e);
		func();
	}
}
function doMakeDough()
{
	console.log("반죽만들기 시작");
	doUntilSuccess(doMakeDough, "dough");
}
function do1stProofing()
{
	if (process['dough'] == false)
		setTimeout(wait, receipe['dough'], do1stProofing);
	else
	{
		console.log("1차 발효 시작");
		doUntilSuccess(do1stProofing, "p1st");
	}
}
function doShaping()
{
	if (process['p1st'] == false)
		setTimeout(wait, receipe['p1st'], doShaping);
	else
	{
		console.log("반죽 성형 시작");
		doUntilSuccess(doShaping, "shaping");
	}
}
function do2ndProofing()
{
	if (process['shaping'] == false)
		setTimeout(wait, receipe['shaping'], do2ndProofing);
	else
	{
		console.log("2차 발효 시작");
		doUntilSuccess(do2ndProofing, "p2nd");
	}
}

function doFrying()
{
	if (process['p2nd'] == false)
		setTimeout(wait, receipe['p2nd'], doFrying);
	else
	{
		console.log("튀기기 시작");
		doUntilSuccess(doFrying, "frying");
	}
}

function wait(func)
{
	func();
}

function baking()
{
	doMakeDough();
	do1stProofing();
	doShaping();
	do2ndProofing();
	doFrying();
}

baking();
