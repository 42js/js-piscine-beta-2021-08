const process = {
    '반죽 만들기': 3000,
    '1차 발효': 5000,
    '성형 하기': 4200,
    '2차 발효': 2000,
    '튀기기': 5000,
}

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function makePretzel(curr) {
    let currentStep = Object.keys(process)[curr];
    if (curr != 5) {
        setTimeout(() => {
            try {
                randomFail();
                console.log(`${currentStep} 완료!`)
                makePretzel(curr + 1);
            }
            catch (error) {
                console.log(`${currentStep}\n${error}`);
                makePretzel(curr);
            }
        }, process[currentStep]);
    }
    else if (curr === 5)
        console.log('김이 모락모락 나는 맛있는 꽈배기가 완성되었다!');
}

makePretzel(0);