const dynamicType = {
    my : 0,

    put : function (num) {
        this.my = num;
    },

    change : function (type) {
        if (type === "String")
            this.my += "";
        else if (type === "Number")
            this.my *= 1;
        else if (type === "Array")
        {
            var tmp = [this.my];
            this.my = tmp;
        }
        else if (type === "Object")
        {
            var tmp = {number : this.my};
            this.my = tmp;
        }
    },

    printType : function() {
        console.log(this.my);
    }
};