const exidMethodChaining = {
  count: 40,
  up() {
    this.count += 1;
    return this;
  },
  down() {
    this.count -= 1;
    return this;
  },
  showCount() {
    console.log(this.count);
  },
};
