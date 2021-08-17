
const dynamicType = {
    put : 1,
    change : "Number",
    printType : "1"
}

const type = {

    put : function put (number){
        if(typeof number === "number"){
            dynamicType.put = number;
        }
    },
    
    change : function change (change) {
        if(change === "String"){
            dynamicType.put = String(dynamicType.put);
        }

        else if(change === "Number") {
            dynamicType.put = Number(dynamicType.put);
        }

        else if(change === "Array"){
            dynamicType.put = [dynamicType.put];
        }

        else if(change === "Object"){
            dynamicType.put = new Number(dynamicType.put);
        }
    },

    printType : function printType(){
        console.log(dynamicType.put );
    }
}

type.put("hello");
type.change("Object");
type.change("Array");
type.change("Number");
type.change("String");
type.printType();
console.log(typeof(dynamicType.put));
