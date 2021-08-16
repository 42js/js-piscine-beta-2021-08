const dynamicType = {
    before: { type: "Number", value: undefined },
    after: { type: undefined, value: undefined },
    isEmpty: true,
    put: function(input){
        if(this.isEmpty === true){
            return ;
        }
        this.before.value = input;
        this.isEmpty = false;
    },
    change: function(type){
        if(this.isEmpty === true){
            return ;
        }
        this.after.type = type;
        if(type === "Number"){
            this.after.value = this.before.value;
        } else if(type === "String"){
            this.after.value = this.before.value + "";
        } else if(type === "Array"){
            this.after.value = [this.before.value];
        } else if(type === "Object"){
            this.after.value = new Number(this.before.value);
        }
    },
    printType: function(){
        if(this.after.type === "Number"){
            console.log(this.after.value);
        } else if(this.after.type === "String"){
            console.log(`"${this.after.value}"`);
        } else if(this.after.type === "Array"){
            console.log(`[${this.after.value}]`);
        } else if(this.after.type === "Object"){
            console.log(`{${this.after.value}}`);
        }
    }
}

// dynamicType.put(42);
// dynamicType.change("String");
// dynamicType.printType();
// dynamicType.change("Number");
// dynamicType.printType();
// dynamicType.change("Object");
// dynamicType.printType();
// dynamicType.change("Array");
// dynamicType.printType();