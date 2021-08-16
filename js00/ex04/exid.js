const exid = {
    count: 40,
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

exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.showCount();