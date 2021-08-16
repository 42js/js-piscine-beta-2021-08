const dynamicType = {
  input: ``,
  output: ``,
  put: function (param) {
    if (typeof param !== 'number')
      throw `Not a number!`;
    this.input = param;
  },
  change: function (type) {
    if (this.input === '')
      throw `\'put\' function is not called yet!`
    switch (type) {
      case 'String':
        this.output = `` + this.input;
        break;
      case 'Number':
        this.output = this.input;
        break;
      case 'Object':
        this.output = { Number: this.input };
        break;
      case 'Array':
        this.output = [this.input];
    }
  },
  printType: function () {
    if (this.input === '')
      throw `\'put\' function is not called yet!`
    console.log(this.output);
  }
}