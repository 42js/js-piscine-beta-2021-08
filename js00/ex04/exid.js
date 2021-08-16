// exid.js
const exid = {
    count: 0,
    up() {
        this.count++;
    },
    down() {
        this.count--;
    },
    showCount() {
        console.log(this.count);
    },
  };