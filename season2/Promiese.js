const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// const GITHUB_USERNAME = "https://api.github.com/users/mohdzaid123";

// const user = fetch(GITHUB_USERNAME);

// console.log(user);

// what is Promise chaining

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((orderId) => updateWalletBalance(orderId));
