var fetchX = new Promise((resolve, reject) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8000/timeline/api/');
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('In x: ' + xhr.status);
      resolve(1);
    }
  }
  xhr.send();
});

var fetchY = new Promise((resolve, reject) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8000/timeline/api/');
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('In y: ' + xhr.status);
      resolve(2);
    }
  }
  xhr.send();
});

function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise])
    .then((values) => {
      return values[0] + values[1];
    });
}

var start_time = Date.now();

add(fetchX, fetchY)
.then((sum) => {
  console.log(sum);
  var stop_time = Date.now();
  console.log("this script last: " + (stop_time - start_time) + "ms");
});


// fetchX.then(function(successMessage){
//   //successMessage的值是上面调用resolve(...)方法传入的值.
//   //successMessage参数不一定非要是字符串类型，这里只是举个例子
//   console.log("Yay! " + successMessage);
// });