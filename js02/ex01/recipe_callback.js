let makeThing = ["반죽", "1차 발효", "성형", "2차 발효", "튀기기"];
let makeTime = [3000, 5000, 4200, 2000, 5000];
let idx = -1;

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function recipe_callback() {
    idx++;
    if (idx == makeThing.length) return;
    console.log(makeThing[idx], "제작중..");
    setTimeout(() => {
        try {
            randomFail();
            console.log(makeThing[idx], "완성!");
            recipe_callback();
        } catch (error) {
            console.log(error);
            idx--;
            recipe_callback();
        }
    }, makeTime[idx]);
}

recipe_callback();
//recipe_start();
