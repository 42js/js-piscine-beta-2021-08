function helloSomeone(str){
	if(str === ""){
        console.log("Who are you?");
    } else if(str === null){
        console.log("I am null and void")
    } else if(str === undefined){
        console.log("Nobody can define me!");
    } else if(typeof str === "number" && !isNaN(str)){
        str/1 > 0 ? console.log(`My age is ${str}`) : console.log("I am Benjamin Button!");
    } else if(isNaN(str)){
        console.log("Age is just a number");
    } else {
        console.log(`Hello ${str}!`);
    }
}

export default helloSomeone;
