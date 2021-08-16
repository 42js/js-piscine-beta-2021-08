const dynamicType = {
    put : function(num) {
        if (typeof num == 'number'/* && isNaN(this.number)*/)
            this.number = num;
        else
            console.log("put: Error ...")
    },
    change : function(str) {
        if (typeof str == 'string' && !isNaN(this.number)) {
            this.val = this.number;
            if (str == 'String')
                this.val = String(this.number);
            else if (str == 'Number')
                this.val = Number(this.number);
            else if (str == 'Object')
                this.val = { put: this.number };
            else if (str == 'Array') {
                this.val = [this.number];
            }
            else
                console.log("ValidError: parameter is not valid");
        }
        else
            console.log("change: Error ...");
    },
    printType : function() {
        if (typeof this.val == 'string')
            console.log('"%d"', this.val);
        else
            console.log(this.val);
    },
    number : NaN,
    val : undefined
}


console.log("----------");

let a = dynamicType;

a.put(42); // type === Number
a.change("Array"); // convert to array with the input;
a.printType(); // print the converted value on console;

console.log("----------");

let b = dynamicType;

b.put(42);
b.change("String");
b.printType();

console.log("----------");

let c = dynamicType;

c.put(42);
c.change("Object");
c.printType();
console.log(c.val.put);

console.log("----------");