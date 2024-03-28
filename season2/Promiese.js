// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const createOrder(cart)

// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })

const GITHUB_USERNAME = "https://api.github.com/users/mohdzaid123";

const user = fetch(GITHUB_USERNAME);

console.log(user);
