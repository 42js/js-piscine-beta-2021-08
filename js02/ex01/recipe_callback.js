function randomFail() {
    if (Math.random() < 0.5) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function makeBase() {
    try {
        randomFail();
        console.log("make base");
        setTimeout(first, 5000);
    }
    catch (e) {
        console.error(e);
        baking();
    }
}

function first() {
    try {
        randomFail();
        console.log("first");
        setTimeout(shaping, 4200);
    }
    catch (e) {
        console.error(e);
        baking();
    }
}

function shaping() {
    try {
        randomFail();
        console.log("shaping");
        setTimeout(second, 2000);
    }
    catch (e) {
        console.error(e);
        baking();
    }
}

function second() {
    try {
        randomFail();
        console.log("second");
        setTimeout(fried, 5000);
    }
    catch (e) {
        console.error(e);
        baking();
    }
}

function fried() {
    try {
        randomFail();
        console.log("fried");
    }
    catch (e) {
        console.error(e);
        baking();
    }
}

function baking() {
    try {
        randomFail();
        setTimeout(makebase, 2000);
    }   
    catch (e) {
        console.error(e);
        baking();
    }
}

baking();