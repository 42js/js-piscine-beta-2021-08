const dynamicType = {
    data : undefined,
    put: function(num) {
        if (this.data == undefined) this.data = num;
    },
    change: function(type) {
        if (this.data != undefined) {
            if (typeof(type) == 'string') {
                if (type == 'String') {
                    if (Array.isArray(this.data) == true) this.data = String(this.data[0]);
                    else if (typeof(this.data) == 'object') this.data = String(this.data.data);
                    else this.data = String(this.data)
                }
                else if (type == 'Number') {
                    if (Array.isArray(this.data) == true) this.data = Number(this.data[0]);
                    else if (typeof(this.data) == 'object') this.data = Number(this.data.data);
                    else this.data = Number(this.data)
                }
                else if (type == 'Array') {
                    if (Array.isArray(this.data) == true) this.data = [Number(this.data[0])];
                    else if (typeof(this.data) == 'object') this.data = [Number(this.data.data)];
                    else this.data = [Number(this.data)]
                }
                else if (type == 'Object') {
                    if (Array.isArray(this.data) == true) this.data = {'data': Number(this.data[0])};
                    else if (typeof(this.data) == 'object') this.data = {'data': Number(this.data.data)};
                    else this.data = {'data': Number(this.data)};
                }
            }
        }
    },
    printType: function() {
        console.log(this.data);
        console.log(typeof(this.data));
    }
}