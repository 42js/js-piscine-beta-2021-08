const dynamicType = {
  variable: 11,
  putCalled: false,
  put: function put(param) {
    try {
      if (this.putCalled === true)
        throw new Error('Error (put): put already called once');
      else if (isNaN(param))
        throw new Error('Error (put): Parameter is not a number');
      else if (typeof this.variable === 'object') {
        if (Array.isArray(this.variable)) this.variable[0] = param;
        else this.variable.value = Number(param);
      } else if (typeof this.variable === 'string')
        this.variable = String(param);
      else this.variable = Number(param);
      this.putCalled = true;
    } catch (error) {
      console.error(error);
    }
  },
  change: function change(param) {
    if (param === 'String') this.variable = String(this.variable);
    else if (param === 'Number') this.variable = Number(this.variable);
    else if (param === 'Object') {
      const temp = Number(this.variable);
      this.variable = {};
      this.variable.value = temp;
    } else if (param === 'Array') {
      const temp = Number(this.variable);
      this.variable = [];
      this.variable[0] = temp;
    } else if (
      param === 'Object' ||
      param === 'Function' ||
      param === 'BigInt' ||
      param === 'Symbol' ||
      param == null
    )
      console.error('Error (change): unsupported data type');
    else console.error('Error (change): invalid input');
  },
  printType: function printType() {
    if (this.putCalled === true) this.putCalled = false;
    if (typeof this.variable === 'string') console.log(`"${this.variable}"`);
    else console.log(this.variable);
  },
};

// const type = dynamicType;

// type.put(13);
// type.put(14);
// type.change('String');
// type.printType();

// type.put('0');
// type.change('Array');
// type.printType();

// type.put(-12e1342);
// // type.change('Number');
// type.printType();

// type.put('dddd');
// type.change('String');
// type.printType();

// type.put('333');
// type.change('Object');
// type.printType();
