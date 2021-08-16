function helloSomeone(input){
    if (typeof input == "string"){
        if (input.length == 0){
            console.log("Who are you?");
        }
        else{
            console.log("My name is " + input + "!");
        }
    }
    else if (typeof input == "object"){
        console.log("I am null and void");
    }
    else{
        if (input == undefined){
            console.log("Nobody can define me!");
        }
        else if (isNaN(input)){
            console.log("Age is just number");
        }
        else{
            if (input <= 0){
                console.log("I am Benjamin Button");
            }
            else{
                console.log("My age is " + input);
            }
        }
    }
}