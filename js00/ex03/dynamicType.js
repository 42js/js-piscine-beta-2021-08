const dynamicType = {
    number: NaN,
    value: undefined,
    flag: false,
    put : function(num) {
        if (typeof num == 'number' && !this.flag) {
            this.number = num;
            this.flag = true;
        }
        else {
            if (this.flag)
                console.log("Put is only available once Before using printType");
            else
                console.log("Error: Not Number Type");
        }
    },
    change : function(type) {
        if (!this.flag)
            console.log("Error: Should not work before using the put function");
        if (type.toLowerCase() === 'string') {
            this.value = this.number.toString();
        }
        else if (type.toLowerCase() === 'number') {
            this.value = this.number;
        }
        else if (type.toLowerCase() === 'object') {
            this.value = new Object(this.number);
        }
        else if (type.toLowerCase() === 'array') {
            this.value = [this.number];
        }
        else
            console.log("Error: Type is not String, Number, Object, Array");
    },
    printType : function() {
        console.log(this.value);
        this.flag = false;
    }
}

// console.log("=============");
// let str = dynamicType;
// str.put(42);
// str.change("String");
// str.printType();
// console.log("=============");
// let num = dynamicType;
// num.put(42);
// num.change("Number");
// num.printType();
// console.log("=============");
// let obj = dynamicType;
// obj.put(42);
// obj.change("object");
// obj.printType();
// console.log("=============");
// let arr = dynamicType;
// arr.put(42);
// arr.change("Array");
// arr.printType();
// console.log("=============");
