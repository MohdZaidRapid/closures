// Promise.all()

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve("P2 success");
//   //   }, 1000);
//   setTimeout(() => {
//     resolve("P2 success");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 success");
//   }, 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve("P2 success");
//   //   }, 1000);
//   setTimeout(() => {
//     resolve("P2 success");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 fail");
//   }, 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P2 success");
  //   }, 1000);
  setTimeout(() => {
    reject("P2 success");
  }, 9000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 20000);
});

// Promise.race
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.ant
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
