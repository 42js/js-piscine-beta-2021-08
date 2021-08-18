
function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const doStep = (step) => {
    try {
        randomFail();
        console.log(step);
        return true;
    } catch (error) {
        console.log(`${step}: ${error}`);
        return false;
    }
}

setTimeout(() => {
    while (!doStep('kneading'));
    setTimeout(() => {
        while (!doStep('firstFermentation'));
        setTimeout(() => {
            while (!doStep('forming'));
            setTimeout(() => {
                while (!doStep('secondFermentation'));
                setTimeout(() => {
                    while (!doStep('frying'));
                }, 500);
            }, 200);
        }, 420);
    }, 500);
}, 300);