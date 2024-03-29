/**
 * what is async
 * what is await
 * how async await works behind the scenes?
 * Example of using async/await
 * Error handling
 * Interviews
 * Async await vs Promise.then/.catch
 */
// what is async
// async fn always return promise

// async function getData() {
//   return p;
// }

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved value !!");
//   }, 5000);
// });

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved value !!");
//   }, 10000);
// });

// async function handlePromise() {
//   // our JS Engine was waiting for resolved
//   console.log("top");
//   const val = await p1;
//   console.log("hello zaid");
//   console.log(val);

//   const val2 = await p2;
//   console.log("hello zaid 1");
//   console.log(val2);
// }

// handlePromise();

// console.log("pokemon");

// await is keyword only be used in async function

// const dataPromises = getData();

// dataPromises.then((res) => console.log(res));

// function getData() {
//   p.then((res) => console.log(res));
// }

// getData();
const API_URL = "https://api.github.com/users/mohdzaid123";

async function handlePromise() {
  const data = await fetch(API_URL);

  const jsonValue = await data.json();

  console.log(jsonValue);

  // fetch function()=>Response.json() =>jsonValue
}

handlePromise();
