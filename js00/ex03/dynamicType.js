const dynamicType = {
  value: null,
  put: function (param) {
    if (typeof param === "number") this.value = param;
    else throw new Error("파라미터의 타입이 숫자가 아닙니다.");
  },
  change: function (param) {
    if (param === "Object") {
      if (typeof this.value === "string") this.value = { value: parseInt(param) };
      else if (Array.isArray(this.value)) this.value = { value: this.value[0] };
      else if (typeof this.value === "number") this.value = { value: this.value };
    }
    if (param === "Array") {
      if (typeof this.value === "string") this.value = [parseInt(this.value)];
      else if (typeof this.value === "object" && !Array.isArray(this.value)) this.value = [this.value.value];
      else if (typeof this.value === "number") this.value = [this.value];
    }
    if (param === "String") {
      if (typeof this.value === "number") this.value = this.value.toString();
      else if (Array.isArray(this.value)) this.value = this.value[0].toString();
      else if (typeof this.value === "object") this.value = this.value.value.toString();
    }
    if (param === "Number") {
      if (typeof this.value === "string") this.value = parseInt(this.value);
      else if (Array.isArray(this.value)) this.value = this.value[0];
      else if (typeof this.value === "object") this.value = this.value.value;
    }
  },

  printType: function () {
    console.log(this.value);
    return this.value;
  },
};


module.exports = dynamicType;
