
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(4);

Promise.all([promise1, promise2]).then((values) => {
  const total = values.reduce((p1, c1) => p1 + c1);
  console.log(`value of x & y: ${values}`);
  console.log(`Total: ${total}`);
});
