function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function gotohell() {
    setTimeout(function hell1() {
        var helll = 0;
        try {
            console.log('반죽 만들기');
            randomFail();
            helll = 1;
        } catch (error) {
            console.log(error);
        } finally {
            if (!helll)
                setTimeout(hell1, 3000);
            else {
                setTimeout(function hell2() {
                    var helll2 = 0;
                    try {
                        console.log('1차 발효');
                        randomFail();
                        helll2 = 1;
                    } catch (error) {
                        console.log(error);
                    } finally {
                        if (!helll2)
                            setTimeout(hell2, 5000);
                        else {
                            setTimeout(function hell3() {
                                var helll3 = 0;
                                try {
                                    console.log('성형 하기');
                                    randomFail();
                                    helll3 = 1;
                                } catch (error) {
                                    console.log(error);
                                } finally {
                                    if (!helll3)
                                        setTimeout(hell3, 4200);
                                    else {
                                        setTimeout(function hell4() {
                                            var helll4 = 0;
                                            try {
                                                console.log('2차 발효');
                                                randomFail();
                                                helll4 = 1;
                                            } catch (error) {
                                                console.log(error);
                                            } finally {
                                                if (!helll4)
                                                    setTimeout(hell4, 2000);
                                                else {
                                                    setTimeout(function hell5() {
                                                        var helll5 = 0;
                                                        try {
                                                            console.log('튀기기');
                                                            randomFail();
                                                            helll5 = 1;
                                                        } catch (error) {
                                                            console.log(error);
                                                        } finally {
                                                            if (!helll5)
                                                                setTimeout(hell5, 5000);
                                                        }
                                                    }, 5000);
                                                }
                                            }
                                        }, 2000);
                                    }
                                }
                            }, 4200);
                        }
                    }
                }, 5000);
            }
        }
    }, 3000);
}

gotohell()