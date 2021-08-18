const process = {
	0 : "making dough",
	1 : "1st proofing",
	2 : "shaping",
	3 : "2nd proofing",
	4 : "frying",
};

const receipe = {
	0 : 3000,
	1 : 5000,
	2 : 4200,
	3 : 2000,
	4 : 5000,
};

function printWithTime(str)
{
	console.log(new Date().getSeconds() + " : " + str);
}

function randomFail()
{
	if (Math.random() < 0.2)
		throw "제작 실패...!(월급이 삭감되었다 ㅠㅠ)";
}

function doOneProc(procId)
{
	try
	{
		randomFail();
		printWithTime(process[procId] + " 끝");
		mainProc(++procId);
	}
	catch (err)
	{
		console.error(new Date().getSeconds() + " : " + process[procId] + " " + err);
		mainProc(procId);
	}
}

function mainProc(procId)
{
	if (!(procId in receipe))
		return ;
	printWithTime(process[procId] + " 시작");
	setTimeout(doOneProc, receipe[procId], procId);
}

mainProc(0);
