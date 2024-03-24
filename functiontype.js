// function statement aka  Fuction  Declaration

function a() {
  console.log("a called");
}

// function Expression

var b = function () {
  console.log("b called");
};

// Anonymous Function -> when function used as a value
// function(){

// }

// Named function Expression

var b = function xyz() {
  console.log("b called");
};

a();
b();

// parameter and arguements
var c = function (param1, param2) {
  console.log("c called");
};

c(1, 2);

// first class function
