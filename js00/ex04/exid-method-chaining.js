const exidMethodChaining = {
    count: 40,

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
    }
};