let start_time = Date.now();
let x = new Promise(resolve => {
  setTimeout(() => {
    let stop_time = Date.now();                                                           
    console.log('this script last: ' + (stop_time - start_time) + 'ms');
    console.log('1');
    resolve(false);
  }, 6000);
  setTimeout(() => {
    let stop_time = Date.now();                                                           
    console.log('this script last: ' + (stop_time - start_time) + 'ms');
    console.log('2');
  }, 4000);
  setTimeout(() => {
    let stop_time = Date.now();                                                           
    console.log('this script last: ' + (stop_time - start_time) + 'ms');
    console.log('3');
  }, 2000);
});

x.then((f) => {
  if (f) {
    let stop_time = Date.now();                                                           
    console.log('this script last: ' + (stop_time - start_time) + 'ms');
    console.log('then');
  } else {
    console.log('flag is false');
  }
});