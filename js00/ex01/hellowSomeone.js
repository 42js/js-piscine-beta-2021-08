export function helloSomeone(info)
{
	if (typeof info ===  typeof "")
	{
		if (info.length == 0)
		{
			console.log("Who are you?");
		}
		else
		{
			console.log("Hello " + info + "!")
		}
	}
	else if (typeof info === typeof null)
	{
		console.log("I and null and void");
	}
	else if (typeof info ===  typeof 1)
	{
		if (info <= 0)
		{
			console.log("I am Benjamin Button!");
		}
		else if (info > 0)
		{
			console.log("My age is", info);
		}
		else
		{
			console.log("Age is just a number");
		}
	}
	else if (typeof info ===  typeof undefined)
	{
		console.log("Nobody can define me!");
	}
}