const step1 = {
    'A. 면 삶기': 10000,
};

const step2 = {
    'B1. 브로콜리 데치기': 1000,
    'B2. 마늘과 양파 볶기': 2000,
    'B3. 베이컨과 햄 볶기': 2000,
    'B4. 소스, 남은 야채 넣고 다같이 볶기': 3000,
}

const step3 = {
    'C. 면까지 넣고 다 같이 볶기': 3000,
}

let DoneA = false;
let DoneB = false;

const processA = () => {
    let currentStep = Object.keys(step1)[0];
    let promise = new Promise((resolve, reject) => {
        console.log(`${currentStep}`);
        setTimeout(() => {
            if (Math.random() < 0.2)
                reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
            resolve();
        }, step1[currentStep]);
    })
    .then(() => {
        console.log("A 작업 모두 완료!");
        DoneA = true;
        if (DoneB) processC();
    })
    .catch((error) => {
        console.log(error);
        processA();
    });
}

const processB = (curr) => {
    let currentStep = Object.keys(step2)[curr];
    let promise = new Promise((resolve, reject) => {
        if (curr < Object.keys(step2).length) {
            console.log(`${currentStep}`);
            setTimeout(() => {
                if (Math.random() < 0.2)
                    reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
                resolve();
            }, step2[currentStep]);
        }
        else if (curr === Object.keys(step2).length) {
            console.log("B 작업 모두 완료!");
            DoneB = true;
            if (DoneA) processC();
        }
    })
    .then(() => {
        processB(curr + 1);
    })
    .catch((error) => {
        console.log(`${error}`);
        processB(curr);
    });
}

const processC = () => {
    let currentStep = Object.keys(step3)[0];
    let promise = new Promise((resolve, reject) => {
        console.log(`${currentStep}`);
        setTimeout(() => {
            if (Math.random() < 0.2)
                reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
            resolve();
        }, step3[currentStep]);
    })
    .then(() => {
        console.log("C 작업 모두 완료!");
        console.log("김이 모락모락 나는 맛있는 스파게티가 완성되었다!");
    })
    .catch((error) => {
        console.log(error);
        processC();
    });
}

processA();
processB(0);