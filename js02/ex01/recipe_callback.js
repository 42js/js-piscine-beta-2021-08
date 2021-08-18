function randomFail()
{
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function step_1()
{
    console.log("1. 반죽 만들기");
    setTimeout(() => {
        try {
            randomFail();
            console.log("반죽 만들기 Success!");
            console.log("\n======NEXT STEP=========")
            step_2();
        }
        catch(err){
            console.log(err);
            console.log("FAIL & RESTART!\n");
            step_1();
        }
    }, 3000);
}

function step_2()
{
    console.log("2. 1차 발효");
    setTimeout(() => {
        try {
            randomFail();
            console.log("1차 발효 Success!");
            console.log("\n======NEXT STEP=========")
            step_3();
        }
        catch(err) {
            console.log(err);
            console.log("FAIL & RESTART!\n");
            step_2();
        }
    }, 5000);

}

function step_3()
{
    console.log("3. 성형하기");
    setTimeout(() => {
        try {
            randomFail();
            console.log("성형하기 Success!");
            console.log("\n======NEXT STEP=========")
            step_4();
        }
        catch(err) {
            console.log(err);
            console.log("FAIL & RESTART!\n");
            step_3();
        }
    }, 4200);

}

function step_4()
{
    console.log("4. 2차 발효");
    setTimeout(() => {
        try {
            randomFail();
            console.log("2차 발효 Success!");
            console.log("\n======NEXT STEP=========")
            step_5();
        }
        catch(err) {
            console.log(err);
            console.log("FAIL & RESTART!\n");
            step_4();
        }
    }, 2000);
}

function step_5()
{
    console.log("5. 튀기기");
    setTimeout(() => {
        try {
            randomFail();
            console.log("튀기기 Success!");
            console.log("\n^-^ FINISH ^-^")
        }
        catch(err) {
            console.log(err);
            console.log("FAIL & RESTART!\n");
            step_5();
        }
    }, 5000);
}

step_1();