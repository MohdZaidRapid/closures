const cart = ["shoes", "pants", "kurta"];

// Consumer
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    //   proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (payentInfo) {
    console.log(payentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (oriderId) {
    console.log("no matter what happened i will definitely be called");
  });

function proceedToPayment(orderId) {
  //
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // login for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
