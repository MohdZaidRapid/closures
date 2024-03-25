// What is Callback Function in Javascript
setTimeout(() => {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
}
x(function y() {
  console.log("y");
});

// Js is single  threaded and sync language
