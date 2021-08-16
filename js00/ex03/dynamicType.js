const dynamicType = {
  variable: 0,
  putCalled: false,
  put: function put(param) {
    try {
      if (this.putCalled === true)
        throw new Error('Error (put): put already called once');
      else if (isNaN(param))
        throw new Error('Error (put): Parameter is not a number');

      if (typeof this.variable === 'object') {
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
    if (
      !(
        param === 'String' ||
        param === 'Number' ||
        param === 'Object' ||
        param === 'Array'
      )
    ) {
      if (
        param === 'Function' ||
        param === 'Boolean' ||
        param === 'BigInt' ||
        param === 'Symbol' ||
        param === null ||
        param === undefined
      )
        console.error('Error (change): unsupported type');
      else console.error('Error (change): invalid input');
    } else if (this.variable.value) {
      if (param === 'String') this.variable = String(this.variable.value);
      else if (param === 'Number') this.variable = Number(this.variable.value);
      else if (param === 'Object') {
        const temp = Number(this.variable.value);
        this.variable = {};
        this.variable.value = temp;
      } else if (param === 'Array') {
        const temp = Number(this.variable.value);
        this.variable = [];
        this.variable[0] = temp;
      }
    } else if (param === 'String') this.variable = String(this.variable);
    else if (param === 'Number') this.variable = Number(this.variable);
    else if (param === 'Object') {
      const temp = Number(this.variable);
      this.variable = {};
      this.variable.value = temp;
    } else if (param === 'Array') {
      const temp = Number(this.variable);
      this.variable = [];
      this.variable[0] = temp;
    }
  },
  printType: function printType() {
    if (this.putCalled === true) this.putCalled = false;
    if (typeof this.variable === 'object') {
      if (Array.isArray(this.variable)) console.log(`- [${this.variable}]`);
      else console.log(this.variable);
    } else if (typeof this.variable === 'string')
      console.log(`- "${this.variable}"`);
    else console.log(this.variable);
  },
};

// const type = dynamicType;

// // case set #1 - multiple change
// type.put(14);
// type.change('String');
// type.printType();

// type.change('Array');
// type.printType();

// type.change('String');
// type.printType();

// type.change('Object');
// type.printType();

// type.change('String');
// type.printType();

// type.change('Number');
// type.printType();

// type.change('String');
// type.printType();

// type.put(15);
// type.change('Array');
// type.printType();
// type.change('String');
// type.printType();

// type.change('Array');
// type.printType();
// type.change('Object');
// type.printType();

// type.change('Array');
// type.printType();
// type.change('Number');
// type.printType();

// type.change('Array');
// type.printType();

// type.put(16);
// type.change('Number');
// type.printType();
// type.change('String');
// type.printType();

// type.change('Number');
// type.printType();
// type.change('Object');
// type.printType();

// type.change('Number');
// type.printType();
// type.change('Array');
// type.printType();

// type.change('Number');
// type.printType();

// type.put(17);
// type.change('Object');
// type.printType();
// type.change('String');
// type.printType();

// type.change('Object');
// type.printType();
// type.change('Number');
// type.printType();

// type.change('Object');
// type.printType();
// type.change('Array');
// type.printType();

// type.change('Object');
// type.printType();

// // case set #1 - done

// // case #2 - idk

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

// // case #2 - idk done
