const dynamicType = {
    num: null,
    changed: null,
    put: function (arg) {
        this.num = Number(arg);
    },
    change: function (type) {
        if (this.num === null)
            return;
        if (type === 'String')
            this.changed = this.num.toString();
        else if (type === 'Number')
            this.changed = this.num;
        else if (type === 'Object')
            this.changed = new Number(this.num);
        else if (type === 'Array')
            this.changed = [this.num];
    },
    printType: function () {
        console.log(this.changed);
    }
};

//dynamicType.put(42);
dynamicType.change("Object");
dynamicType.printType();


