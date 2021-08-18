let makeThing = ["반죽", "1차 발효", "성형", "2차 발효", "튀기기"];
let makeTime = [3000, 5000, 4200, 2000, 5000];

function recipe_callback(index) {
    return new Promise((resolve, reject) => {
        console.log(makeThing[index], "제작중...");
        setTimeout(() => {
            if (randomFail()) {
                reject(index);
                return;
            }
            console.log(makeThing[index], "완성!");
            resolve(index);
        }, makeTime[index]);
    });
}

function errorAndRestart(idx) {
    console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    startRecipe(idx - 1);
}

function randomFail() {
    if (Math.random() < 0.2) return true;
}

function startRecipe(index) {
    index++;
    if (index === makeThing.length) return;
    recipe_callback(index).then(startRecipe).catch(errorAndRestart);
}

startRecipe(-1);
