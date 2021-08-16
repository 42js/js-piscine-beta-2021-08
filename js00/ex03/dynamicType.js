const dynamicType = {
    arg: 0,
    newtype: 'not changed',
    put: function (num) {
        if (typeof num !== 'number') {
            console.error(num + ' is not number');
            return;
        }
        this.arg = num;
    },
    change: function (type) {
        if (type === 'String') this.newtype = String(this.arg);
        else if (type === 'Number') this.newtype = this.arg;
        else if (type === 'Object') this.newtype = { Number: this.arg };
        else if (type === 'Array') this.newtype = [this.arg];
        else console.log('Invaild type');
    },
    printType: function () {
        console.log(this.newtype);
    },
};
