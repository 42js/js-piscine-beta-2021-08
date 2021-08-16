const dynamicType = {
    before: { type: "Number", value: undefined },
    after: { type: undefined, value: undefined },
    put: function(input){
        this.before.value = input;
    },
    change: function(type){
        this.after.type = type;
        this.after.value
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