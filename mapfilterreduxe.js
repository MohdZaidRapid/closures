const arr = [5, 1, 3, 2, 6];

// sum or max

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }

// console.log(findSum(arr));

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);
// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// filter odd value inside this array

// function isOdd(x) {
//   return x % 2;
// }
// const output = arr.filter(isOdd);

// console.log(output);

// function isEven(x) {
//   return x % 2 === 0;
// }
// const output = arr.filter(isEven);

// console.log(output);

// Map
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);
