const exid = {
    count : 40,

    up() {
        exid.count += 1;
    },

    down() {
        exid.count -= 1;
    },

    showCount() {
        console.log(exid.count);
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