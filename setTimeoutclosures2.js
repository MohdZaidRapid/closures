// function outest() {
//   var c = 20;
//   function outer(b) {
//     //   var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     //   var a = 10;
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = outest();
// var open = close("hello");
// open();

// // advantages of closures
// // currying ,higher order function

// // data hiding and encapsulation example

function counter() {
  var count = 0;

  function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}

var counter1 = counter();
counter1();
counter1();
counter1();

var counter2 = counter();
counter2();
