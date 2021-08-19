'use strict';
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

function doStep(procId)
{
	printWithTime(process[procId] + " start");
	return new Promise((resolve, reject)=>{
				setTimeout(()=>{
						if (Math.random() < 0.2)
							reject(printWithTime(process[procId] + " error"));
						else
							resolve(printWithTime(process[procId] + " over"));
							}, receipe[procId]);
					});
}

async function makeDoughnut(i)
{
	if (i > 4)
		return ;
	try
	{
		await doStep(i);
		makeDoughnut(++i);
	}
	catch (str)
	{
		makeDoughnut(i);
	}
}

makeDoughnut(0);
