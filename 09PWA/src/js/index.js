import $ from 'jquery';

console.log($);
console.log('index.js已加载');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((register) => {
        console.log('注册成功', register);
      }).catch((error) => {
        console.log('注册失败', error);
      });
  });
}
