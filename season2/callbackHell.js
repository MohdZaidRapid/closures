// console.log("Hello");

// setTimeout(function () {
//   console.log("Javascript");
// }, 5000);

// console.log("Season 2");

const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

api.createOrder(cart, function () {
  api.proceedToPayment();
});
