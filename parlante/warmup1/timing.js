setTimeout(function () {
  console.log("setTimeout");
}, 0);

console.log("script start");

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");
