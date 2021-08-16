const dynamicType = {
    
    source: "",
    output: "",

    put : function (param) 
    {
        if (typeof param != 'number')
            throw "Is this Num...? NoNO! ";
      this.source = param;
    },

    change : function (type) 
    {
        if (this.source === '')
            throw "there is No Source Input!";
      switch (type) {
        case 'String':
          this.output = '' + this.source;
          break;
        case 'Number':
          this.output = this.source;
          break;
        case 'Object':
          this.output = { Number: this.source};
          break;
        case 'Array':
          this.output = [this.source];
      }
    },
    printType : function () 
    {
      if (this.source === '')
        throw "there is No Source Input!";
      console.log(this.output);
    }
  }