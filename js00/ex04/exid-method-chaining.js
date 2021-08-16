const exidMethodChaining = {
    count: 40,
    up: function () {
        this.count++;
        return this;
    },
    down: function () {
        this.count--;
        return this;
    },
    showCount: function () {
        console.log(this.count);
        return this;
    },
};

exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount();