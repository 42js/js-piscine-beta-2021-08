const exidMethodChaining = {
    count: 0,
    up() {
        this.count++;
        return this;
    },
    down() {
        this.count--;
        return this;
    },
    showCount() { 
        console.log(this.count);
        return this;
    },
  };