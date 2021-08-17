const dynamicType = {
    num : 0,
    put : function(변수){
        this.num = 변수
        // console.log(this.num);
    },
    change : function(타입){
        if (타입 == "String"){
            this.num = this.num + ""
        }
        else if (타입 == "Array")
            this.num = [this.num]
        else if (타입 == "Object")
            this.num = { num : this.num}
        else if (타입 == "Number")
            this.num = Number(this.num)
    },
    printType : function(){
        console.log(typeof this.num, this.num);
    }
};
const type = dynamicType;

type.put(14);
type.change('String');
type.printType();

type.change('Array');
type.printType();

type.change('String');
type.printType();

type.change('Object');
type.printType();

type.change('String');
type.printType();

type.change('Number');
type.printType();//14

type.change('String');
type.printType();//14
