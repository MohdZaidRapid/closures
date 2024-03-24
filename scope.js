// if (true) {
//   // Compound Statement
//   var a = 10;
//   console.log(a);
// } else {
// }

// when js expect one statement but we give them in one group is known is block
// block combine multiple statement

// block scope
// what are variable and function we cav access in this block
// access block  statement lion king group group group
// access statememt group groupe groupup
// group
// gro

// shadowing  in js
var a = 100;
let b = 200;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);
