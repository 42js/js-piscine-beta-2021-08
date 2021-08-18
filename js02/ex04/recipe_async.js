function randomFail(reject) {
    if (Math.random() < 0.2) reject(`제작 실패..!(월급이 삭감되었다 ㅜㅜ)`);
}

const recipe = {
    '반죽 만들기': 3000,
    '1차 발효': 5000,
    '성형 하기': 4200,
    '2차 발효': 2000,
    '튀기기': 5000,
}

const baking = (thisStep) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve();
        }, recipe[thisStep]);
    });
}

async function processStep(step) {
    let thisStep = Object.keys(recipe)[step];
    console.log(`${thisStep} 진행중...`)
    await baking(thisStep).catch(async function (e) {
        console.log(`${thisStep} ${e}`);
        await processStep(step);
    })
}

async function process() {
    await processStep(0);
    await processStep(1);
    await processStep(2);
    await processStep(3);
    await processStep(4);
    await console.log("빵 만들기 완성!");
}

process();