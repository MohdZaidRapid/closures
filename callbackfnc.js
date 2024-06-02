// What is Callback Function in Javascript
// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
// }
// x(function y() {
//   console.log("y");
// });

// Javascript is single  threaded and synchrounous language 

function attachEventListener() {
  console.log("hello");
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}

attachEventListener();
