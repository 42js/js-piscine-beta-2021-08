export default function helloSomeone(e){
	if (typeof e === 'undefined')
		console.log('Nobody can define me!');
	if (typeof e !== 'undefined' && isNaN(e))
		console.log('Age is just a number');
		//isNaN(undefined) == isNaN(NAN) == true
	if (typeof e === 'number' && e > 0)
		console.log(`My age is ${e}`);
	if (typeof e === 'number' && e <= 0)
		console.log('I am Benjamin Button!');
	if (typeof e === 'null')
		console.log('I am null and void');
	if (typeof e === 'string' && e.length === 0)
		console.log('Who are you?');
	if (typeof e === 'string' && e.length !== 0)
		console.log(`Hello ${e}!`);
}
