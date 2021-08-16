export default function helloSomeone(tmp)
{
	let type = typeof tmp;
	
	if (type == "string"  && tmp != "")
		console.log("Hello " + tmp);
	if (type == "string"  && tmp == "")
		console.log("Who are you?");
	if (type == "number" && isNaN(tmp) == true)
		console.log("Age is just a number");
	if (type == "number" && tmp != NaN && tmp > 0)
		console.log("My age is " + tmp);
	if (type == "number" && tmp != NaN && tmp <= 0)
		console.log("I am Benjamin Button!");
	if (type == "object")
		console.log("I am null and void");
	if (type == "undefined")
		console.log("Nobody can define me!");
}
