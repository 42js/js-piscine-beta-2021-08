const exid = {
    count: 40,
    up() {
        this.count++;
    },
    down() {
        this.count--;
    },
    showCount: function () {
        console.log(this.count);
    },
};
