const dynamicType = {
    num: 0,
    break_point: 0,
    put: function put(val){
        if (this.break_point == 0){
            this.num = val;
            this.break_point = 1;
        }
        else{
            console.log("Already put number!!");
        }
    },
    change: function change(types){
        if (types == "string"){
            this.num = this.num.toString;
        }
        else if (types == "number"){
            this.num *= 1;
        }
        else if (types == "array"){
            let temp = this.num;
            this.num = [temp];
        }
        else if (types == "object"){
            let temp = this.num;
            this.num = new Object(this.num);
        }
        else{
            console.log("type Doesn't exixt!!");
        }
    },
    printType: function printType() {
        console.log(this.num);
    }
}

let Type = dynamicType;

Type.put(42);
Type.change("object");
Type.printType();