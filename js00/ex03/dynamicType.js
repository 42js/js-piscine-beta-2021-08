let input;
let outputStr;
let outputNumber;
let outputArray = [];
let outputObj = {};
let outputType;
let flag = false;
const dynamicType = {
    put : function(number) {
        if (flag) {
            console.error("put function must be called only once before printTypes");
            return;
        }
        flag = true;
        input = number;
    },
    change : function(type) {
        if (!flag) {
            console.error("change function must be followed after ")
            return;
        }
        outputType = type;
        if (type == "String") 
            outputStr = string(input);
        if (type === "Number") 
            outputNumber = input;
        if (type === "Array")
            outputArray[0] = input;
        if (type === "Object") 
            outputObj = {number : input};
    },
    printType : function() {
        if (flag)
            flag = false;
        if (outputType === "String") 
            console.log(outputStr);
        if (outputType === "Number") 
            console.log(outputNumber);
        if (outputType === "Array")
            console.log(outputArray[0]);
        if (outputType === "Object") 
            console.log(outputObj);
    }

}
dynamicType.put(42); // type === Number
dynamicType.change(“Array”); // convert to array with the input;
/*
dynamicType.printType(); // print the converted value on console;
dynamicType.put(42);
dynamicType.change(“String”);
dynamicType.printType();
*/