const process = {
    '반죽 만들기': 3000,
    '1차 발효': 5000,
    '성형 하기': 4200,
    '2차 발효': 2000,
    '튀기기': 5000,
}

const makePretzel = (curr) => {
    let promise = new Promise((resolve, reject) => {
        let currentStep = Object.keys(process)[curr];
        console.log(`${currentStep}`);
        setTimeout(() => {
            if (Math.random() < 0.2)
                reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
            resolve();
        }, process[currentStep]);
    })
    promise
        .then(() => {
            if (curr === 4)
                console.log('김이 모락모락 나는 맛있는 꽈배기가 완성되었다!');
            else
                makePretzel(curr + 1);
        })
        .catch((error) => {
            console.log(error);
            makePretzel(curr);
        })
}

makePretzel(0);