const dynamicType = {
    printFlag: 0,
    changeFlag: 0,
    tmp: 0,
    output: 0,
    put : function(number) {
        if (this.printFlag === 0 && !isNaN(number))
        {
            this.tmp = number;
            this.output = number;
            this.printFlag = 1;
            this.changeFlag = 1;
        }
        else
            console.log("error");
    },
    change : function(type) {
        if (this.changeFlag === 0)
        {
            console.log("error");
            return ;
        }
        if (type === String)
            this.output = this.tmp + "";
        else if (type === Number)
            this.output = this.tmp * 1;
        else if (type === Array)
        {
            let number = this.tmp;
            this.output = [];
            this.output[0] = number;
        }
        else if (type === Object)
        {
            let number = this.tmp;
            this.output = {};
            this.output.key = number;
        }
    },
    printType : function() {
        if (typeof this.output === "string")
            console.log("\"" + this.output + "\"");
        else if (typeof this.output === "number")
            console.log(this.output);
        else if (typeof this.output === "object")
            console.log(this.output);
        this.printFlag = 0;
    }
}