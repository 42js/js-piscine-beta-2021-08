
function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

/*
꽈배기 만들기

1. 반죽 만들기 - 3초 kneading
2. 1차 발효 - 5초 firstFermentation
3. 성형 하기 - 4.2초 forming
4. 2차 발효 - 2초 secondFermentation
5. 튀기기 - 5초 frying
*/

const kneading = () => {
    try {
        randomFail();
        console.log('kneading');
    } catch (error) {
        console.log('kneading: '+ error);
    }
};

const firstFermentation = () => {
    try { 
        randomFail();
        console.log('firstFermentation');
    } catch (error) {
        console.log('firstFermentation: '+ error);
    }
};

const forming = () => {
    try { 
        randomFail();
        console.log('forming');
    } catch (error) {
        console.log('forming: '+ error);
    }
};

const secondFermentation = () => {
    try { 
        randomFail();
        console.log('secondFermentation');
    } catch (error) {
        console.log('secondFermentation: '+ error);
    }
};

const frying = () => {
    try { 
        randomFail();
        console.log('frying');
    } catch (error) {
        console.log('frying: '+ error);
    }
};

setTimeout(kneading, 300);

