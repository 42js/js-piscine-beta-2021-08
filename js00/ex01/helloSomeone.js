const helloSomeone = function(vars) {

    if(typeof vars === "undefined"){
        console.log("Nobody can define me!");
    }

    else if(typeof vars === "string"){
        if(vars === ""){
            console.log("Who are you?")
        }else{
            console.log("Hello " + 42);
        }
    }

    else if(vars === null){
        console.log("I am null and void");
    }

    else if(isNaN(vars) === true){
        console.log("Age is just a number");
    }

    else if(typeof vars === "number"){
        if(vars <= 0){
            console.log("I am Benjamin Button!");
        }else{
            console.log("My age is " + vars);
        }
    }
}

export default helloSomeone;
