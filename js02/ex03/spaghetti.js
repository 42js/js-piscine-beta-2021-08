
function printWithTime(str)
{
	console.log(new Date().getSeconds() + " " + str);
}

function setTimer(resolve, reject, type)
{
	if (Math.random() < 0.2)
	{
		printWithTime(type + " 실패요");
		reject("error");
	}
	else
	{
		printWithTime(type + " over");
		resolve("suc");
	}
}

function pMix()
{
	return new Promise((resolve, reject)=>{
					printWithTime("mix" + " start");
					setTimeout(setTimer, 2000, resolve, reject, "mix");
					}).catch(()=>{pMix();});
}
function pBoil()
{
	return new Promise((resolve, reject)=>{

					printWithTime("boil" + " start");
					setTimeout(setTimer, 1000, resolve, reject, "boil");
					}).catch(()=>{pBoil();});
}

function pBrocoli()
{
	return new Promise((resolve, reject)=>{	
					printWithTime("brocoil" + "start");
					setTimeout(setTimer, 3000, resolve, reject, "brocoil");
					}).catch(()=>{pBrocoli();});
}

function main()
{
	let boil = pBoil();
	let brocoli = pBrocoli();
	Promise.all([boil, brocoli])
			.then(()=>{pMix();})
}

main();
