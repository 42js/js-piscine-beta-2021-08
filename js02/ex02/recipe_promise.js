// Promise, <Promise>.then(), <Promise>.catch() 사용

function cooking(num) {
  let promise = new Promise((resolve, reject) => {
    if (num == 1) {
      console.log("1) 반죽하는 중...");
      setTimeout(() => {
        if (Math.random() < 0.2)
          reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", num]);
        else resolve(num);
      }, 3000);
    }
    if (num == 2) {
      console.log("2) 1차 발효중...");
      setTimeout(() => {
        if (Math.random() < 0.2)
          reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", num]);
        else resolve(num);
      }, 3000);
    }
    if (num == 3) {
      console.log("3) 성형하는 중...");
      setTimeout(() => {
        if (Math.random() < 0.2)
          reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", num]);
        else resolve(num);
      }, 3000);
    }
    if (num == 4) {
      console.log("4) 2차 발효중...");
      setTimeout(() => {
        if (Math.random() < 0.2)
          reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", num]);
        else resolve(num);
      }, 3000);
    }
    if (num == 5) {
      console.log("5) 튀기는 중...");
      setTimeout(() => {
        if (Math.random() < 0.2)
          reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", num]);
        else resolve(num);
      }, 3000);
    }
  });
  promise
    .then((num) => {
      cooking(num + 1);
    })
    .catch(([errmsg, num]) => {
      console.log(errmsg);
      cooking(num);
    });
}

cooking(1);
