let fetch = () => {
  return new Promise((resolve, reject) =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/timeline/api/');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('In x: ' + xhr.status);
        resolve(xhr.response);
      }
    };
    xhr.onerror = (e) => {
      reject(e, xhr);
    };
    xhr.send();
  });
};


let x = fetch();
// x.then((v) => {
//   console.log('promise resolved: ' + v);
//   return '----e test';
// }).then((e) => {
//   console.log('promise not rejected: ' + e);
//   return '----again'
// }).then((again) => {
//   console.log('third turn: ' + again);
// });

x.then((v) => {
  console.log('promise resolved: ' + v);
  return '----resolved';
}, (err, xhr) => {
  console.log('promise rejected: ' + err + xhr);
  return err;
}).then((res) => {
  console.log('let\'s see なにこれ : ' + res);
  return '----don\'t need to return';
});