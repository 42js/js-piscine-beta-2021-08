function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const recipe = {
    '반죽 만들기': 3000,
    '1차 발효': 5000,
    '성형 하기': 4200,
    '2차 발효': 2000,
    '튀기기': 5000,
}

function process(step) {
    let thisStep = Object.keys(recipe)[step];
    if (step != 5) {
        setTimeout(() => {
            try {
                randomFail();
                console.log(`${thisStep} 끝!`);
                process(step + 1);
            }
            catch (e) {
                console.log(`${thisStep} ${e}`);
                process(step);
            }
        }, recipe[thisStep]);
    }
    else if (step == 5) console.log('빵이 완성되었다!')
}

process(0);