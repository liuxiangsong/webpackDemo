
// import '@babel/polyfill'
const add = function add(a, b) {
  return a + b;
};

console.log(add(1, 2));
const promise = new Promise(((resolve) => {
  setTimeout(() => {
    console.log('定时器已执行');
    resolve();
  }, 1000);
}));
console.log(promise);
console.log(1);
