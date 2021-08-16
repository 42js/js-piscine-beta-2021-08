// in dynamicType.js
const dynamicType = {
  arg: null,
  put(val) {
    if (val === null) throw String('Please initialize arg with not null value!');
    if (this.arg != null) throw String('Arg is already initialized!');
    if (typeof val !== 'number') throw String('Arg must init with Number type value!');
    this.arg = val;
  },
  change(type) {
    if (this.arg === null) throw String('You must initialize arg through put function!');
    switch (type) {
      case 'String':
        this.arg = String(this.arg);
        break;
      case 'Number':
        this.arg = Number(this.arg);
        break;
      case 'Object':
        this.arg = Object(this.arg);
        break;
      case 'Array': {
        this.arg = Array(this.arg);
        break;
      }
      default:
        throw String('Invalid type!');
    }
  },
  printType() {
    switch (typeof this.arg) {
      case 'string':
        console.log(`- "${this.arg}"`);
        break;
      case 'number':
        console.log(`- ${this.arg}`);
        break;
      case 'object':
        if (this.arg === null) console.log('null: uninitialized');
        else if (Array.isArray(this.arg)) {
          this.arg.forEach((item) => {
            console.log(`- [${item}]`);
          });
        } else console.log(`- {${this.arg}}`);
        break;
      default:
        break;
    }
  },
};

// try {
//   const type = dynamicType;
//   type.printType();
//   type.put('42');
//   type.put(42);
//   type.change('Array');
//   type.printType();
//   type.put(14);
//   type.change('String');
//   type.printType();

//   type.change('Array');
//   type.printType();

//   type.change('String');
//   type.printType();

//   type.change('Object');
//   type.printType();

//   type.change('String');
//   type.printType();

//   type.change('Number');
//   type.printType();
// } catch (e) {
//   console.log(e);
// }
