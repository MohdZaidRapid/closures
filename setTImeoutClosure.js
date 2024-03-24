// function x() {
//   var i = 1;
//   for (var i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("Hello Hello Hello");
// }

// x();

// console.log("hello 1");
// setTimeout(() => {
//   console.log("hello");
// }, 0);

// setTimeout(() => {
//   console.log("pokemon");
// }, 0);

// console.log("hello 2");

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

x();
