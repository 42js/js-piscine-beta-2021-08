function randomFail() {
    if (Math.random() < 0.2) return "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const recipe = {
    '반죽 만들기': 3000,
    '1차 발효': 5000,
    '성형 하기': 4200,
    '2차 발효': 2000,
    '튀기기': 5000,
}

function process(step) {
    return new Promise((resolve, reject) => {
        let thisStep = Object.keys(recipe)[step];
        if (step != 5) {
            setTimeout(() => {
                let fail = randomFail();
                if (!fail) resolve(thisStep);
                else reject([thisStep, fail]);
            }, recipe[thisStep]);
        }
        return;
    }).then((thisStep) => {
        console.log(`${thisStep} 끝!`);
        return (process(step + 1));
    }).catch((err) => {
        let [thisStep, fail] = err;
        console.log(`${thisStep} ${fail}`);
        process(step);
    });
}

process(0);