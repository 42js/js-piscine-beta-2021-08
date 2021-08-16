
const dynamicType = {
  input: "",
  output: "",
  put : function (param) {
    this.input = param;
  },
  change : function (type) {
    switch (type) {
      case 'String':
        this.output = String(this.input);
        break;
      case 'Number':
        this.output = Number(this.input);
        break;
      case 'Object':
        this.output = Object(this.input);
        break;
      case 'Array':
        this.output = [this.input];
    }
  },
  printType :function () {
    console.log(this.output);
  }
}
