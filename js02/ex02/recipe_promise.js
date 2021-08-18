// new Promise((resolve, reject) => {
//     if (Math.random() < 0.2) {
//         reject(new Error("failed"));
//     }
//     else {
//         setTimeout(() => {
//             let name = 'make base';
//             console.log(name);
//             resolve(name);
//         }, 3000);
//     }
// })
// .then((prevName) => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < 0.5) {
//             reject(new Error("failed"));
//         }
//         else {
//             setTimeout(() => {
//                 let name = 'first';
//                 console.log(name);
//                 resolve(name);
//             }, 5000);
//         }
//     });
// }).catch((err) => {
//     console.error(err);
// })
// .then((prevName) => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < 0.5) {
//             reject(new Error("failed"));
//         }
//         else {
//             setTimeout(() => {
//                 let name = 'shaping';
//                 console.log(name);
//                 resolve(name);
//             }, 4200);
//         }
//     });
// }).catch((err) => {
//     console.error(err);
// })
// .then((prevName) => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < 0.5) {
//             reject(new Error("failed"));
//         }
//         else {
//             setTimeout(() => {
//                 let name = 'second';
//                 console.log(name);
//                 resolve(name);
//             }, 2000);
//         }
//     });
// }).catch((err) => {
//     console.error(err);
// })
// .then((prevName) => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < 0.5) {
//             reject(new Error("failed"));
//         }
//         else {
//             setTimeout(() => {
//                 let name = 'fried';
//                 console.log(name);
//                 resolve(name);
//             }, 5000);
//         }
//     });
// }).catch((err) => {
//     console.error(err);
// });

// const addCoffee = (name, time) => {
//     return () => {
//         return new Promise((resolve, reject) => {
//             if (Math.random() < 0.2) {
//                 throw new Error("Error in then()");
//             } else {
//                 setTimeout(() => {
//                     console.log(name);
//                     resolve();
//                 }, time);
//             }
//         });
//     };
// };

// addCoffee('make base', 500)()
//     .then(addCoffee('first', 500))
//     .then(addCoffee('shaping', 500))
//     .then(addCoffee('second', 500))
//     .then(addCoffee('fried', 500))
//     .catch(function(err) {
//         console.log('then error : ', err);
//       });

// function routine(num) {
//     let temp = new Promise(function (resolve, reject) {
//         if (num == 1) {
//             console.log('1.반죽 만들기');
//             if (Math.random() < 0.2)
//                 reject(["제작 실패..!(월급 삭제) ", num]);
//             setTimeout(() => {
//                 resolve(num);
//             }, 3000);
//         }
//         if (num == 2) {
//             console.log('2.1차 발효 시작');
//             if (Math.random() < 0.2)
//                 reject(["제작 실패..!(월급 삭제) ", num]);
//             setTimeout(() => {
//                 resolve(num);
//             }, 5000);
//         }
//         if (num == 3) {
//             console.log('3.성형 하기 시작');
//             if (Math.random() < 0.2)
//                 reject(["제작 실패..!(월급 삭제) ", num]);
//             setTimeout(() => {
//                 resolve(num);
//             }, 4200);
//         }
//         if (num == 4) {
//             console.log('4.2차 발효 시작');
//             if (Math.random() < 0.2)
//                 reject(["제작 실패..!(월급 삭제) ", num]);
//             setTimeout(() => {
//                 resolve(num);
//             }, 2000);
//         }
//         if (num == 5) {
//             console.log('5.튀기기 시작');
//             if (Math.random() < 0.2)
//                 reject(["제작 실패..!(월급 삭제) ", num]);
//             setTimeout(() => {
//                 resolve(num - 5);
//             }, 5000);
//         }
//     })
//     temp.then((num) => {
//         routine(num + 1);
//     }).catch((arr) => {
//         console.log(arr[0]);
//         routine(arr[1]);
//     })
// }
// routine(1);