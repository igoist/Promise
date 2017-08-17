var start_time = Date.now();
// // let a = new Promise();
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function() {
//   console.log('Resolved.');
// });

// console.log('Hi!');
// let x = 10000;
// let a = [];
// for (let i = 0; i < x; i++) {
//   a.push('test code');
// }
// console.log(a);




let myajax = (fn) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8000/timeline/api/');
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const res = JSON.parse(xhr.response);
      fn(res);
    }
  }
  xhr.send();
};

let mfn = (res) => {
  console.log(res);
  var stop_time = Date.now();
  console.log("this script last: " + (stop_time - start_time) + "ms");
}

myajax(mfn);







