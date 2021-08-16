let exidMethodChaining = {
    count: 40,
    up() {
        this.count++;
        return this;
    },
    down() {
        this.count--;
        return this;
    },
    showCount: function () {
        console.log(this.count);
        return this;
    },
};
