// in dynamicType.js
const dynamicType = {
    origin: {
        type: null,
        value: null
    },
    value: null,
    put: function (value) {
        this.origin.value = value;
        this.origin.type = typeof value;
        if (this.origin.type === 'object' && Array.isArray(this.origin.value))
            this.origin.type = 'array';
    },
    change: function (type) {
        if (type === 'String') {
            this.value = this.origin.value;
            if (this.origin.type === 'object')
                this.value = JSON.stringify(this.origin.value)
            this.value = `"${this.value}"`;
        }
        else if (type === 'Number') {
            this.value = Number(this.origin.value);
            if (this.origin.type === 'array' && this.origin.value.length > 1) {
                this.value = Number(this.origin.value[this.origin.value.length - 1]);
            }
            if (this.origin.type === 'object') {
                for (var key in this.origin.value) {
                    this.value = Number(this.origin.value[key]);
                }
            }
        }
        else if (type === 'Object') {
            this.value = {
                value: this.origin.value
            };
            if (this.origin.type === 'object') {
                this.value = this.origin.value;
            } else if (this.origin.type === 'array') {
                this.value = {};
                for (var i in this.origin.value) {
                    this.value[i] = this.origin.value[i];
                }
            }
        }
        else if (type === 'Array') {
            this.value = [this.origin.value];
            if (this.origin.type === 'array') {
                this.value = this.origin.value;
            } else if (this.origin.type === 'object') {
                this.value = [];
                for (var key in this.origin.value) {
                    this.value.push(this.origin.value[key]); 
                }
            }
        }
    },
    printType: function () {
        console.log(this.value);
    }
}