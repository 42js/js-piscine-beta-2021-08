// async, await 무조건 사용!
// Promise, <Promise>.then(), <Promise>.catch() 사용

// function makeDough(msg, intv) {
//   console.log(msg);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) {
//         reject(["제작 실패..!(월급이 삭감되었다 ㅜㅜ)", msg, intv]);
//       } else resolve(1);
//     }, intv);
//   });
// }

// makeDough("반죽...", 3000)
//   .then(() => makeDough("발효...", 5000))
//   .then(() => makeDough("주물럭...", 4200))
//   .then(() => makeDough("2번째 발효...", 2000))
//   .then(() => makeDough("튀기기...", 500))
//   .catch(([err, msg, intv]) => {
//     console.log(err);
//   });
