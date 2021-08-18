function randomFail() {
    if (Math.random() < 0.2) return "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const noodle = {
    '면 삶기': 10000
};

const vegetable = {
    '브로콜리 대치기': 1000,
    '마늘과 양파 볶기': 2000,
    '베이컨과 햄 볶기': 2000,
    '소스, 남은 야채 넣고 다같이 볶기': 3000
};

const last = {
    '면까지 넣고 다 같이 볶기': 3000,
};

let checkNoodle = false;
let checkVegetable = false;

function processFinish() {
    return new Promise((resolve, reject) => {
        let thisStep = Object.keys(last)[0];
        setTimeout(() => {
            let fail = randomFail();
            if (!fail) resolve(thisStep);
            else reject([thisStep, fail]);
        }, last[thisStep]);
    }).then((thisStep) => {
        console.log(`${thisStep} 끝!`);
        console.log('스파게티 완성!!');
    }).catch((err) => {
        let [thisStep, fail] = err;
        console.log(`${thisStep} ${fail}`);
        processFinish();
    })
}

function processNoodle() {
    return new Promise((resolve, reject) => {
        let thisStep = Object.keys(noodle)[0];
        setTimeout(() => {
            let fail = randomFail();
            if (!fail) resolve(thisStep);
            else reject([thisStep, fail]);
        }, noodle[thisStep]);
    }).then((thisStep) => {
        console.log(`${thisStep} 끝!`);
        checkNoodle = true;
        if (checkVegetable == true) processFinish();
    }).catch((err) => {
        let [thisStep, fail] = err;
        console.log(`${thisStep} ${fail}`);
        processNoodle();
    });
}

function processVegetable(step) {
    return new Promise((resolve, reject) => {
        let thisStep = Object.keys(vegetable)[step];
        if (step < Object.keys(vegetable).length) {
            setTimeout(() => {
                let fail = randomFail();
                if (!fail) resolve(thisStep);
                else reject([thisStep, fail]);
            }, vegetable[thisStep]);
        }
        else if (step >= Object.keys(vegetable).length) {
            checkVegetable = true;
            if (checkNoodle == true) processFinish();
            return;
        }
    }).then((thisStep) => {
        console.log(`${thisStep} 끝!`);
        processVegetable(step + 1);
    }).catch((err) => {
        let [thisStep, fail] = err;
        console.log(`${thisStep} ${fail}`);
        processVegetable(step);
    });
}

processNoodle();
processVegetable(0);