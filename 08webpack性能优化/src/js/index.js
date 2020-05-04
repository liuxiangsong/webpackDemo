import '../css/index.css';
import $ from 'jquery';
import { add } from './test';
import print from './print';

console.log($);
console.log('index.js已加载');
console.log(add(1, 5));

print();
// 如果module.hot为true，则说明开启了HMR功能
if (module.hot) {
  module.hot.accept('./print.js', () => {
    print();
  });
}
