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

function doOneproc(procId)
{
	if (!(procId in receipe))
		return ;
	let mypromise = new Promise((resolve, reject) => {
			printWithTime(process[procId] + " 시작");
			setTimeout(()=>{
						if (Math.random() < 0.2)
							reject(procId);
						else
							resolve(procId);
						}, receipe[procId]);}
			)
	mypromise.then((procId) => {
				printWithTime(process[procId] + " 끝");
				doOneproc(++procId)
					} )
			 .catch((procId) => {
						printWithTime(process[procId] + " 제작 실패...!(월급이 삭감되었다 ㅠㅜ)");
						doOneproc(procId);
							 });
}

doOneproc(0);
