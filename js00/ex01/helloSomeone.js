export default function helloSomeone(변수){
    if (typeof 변수 === "string"){
        if (변수 === '')
            console.log('who are you?')
        else
            console.log(`Hello ${변수}!`)    
    }
    else if (변수 === null)
        console.log('I am null and void')
    else if (typeof 변수 === "number"){
        if (변수 > 0)
            console.log(`My age is ${변수}`)
        else if (변수 <= 0)
            console.log('I am Benjamin Button!')
    }
    else if (변수 === NaN)
        console.log('Age is just a number')
    else if (typeof 변수 === "undefined")
        console.log('Nobody can define me!')
}