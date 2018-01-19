const log = console.log.bind(console)
let start_time = Date.now();

let case1 = _ => {
  new Promise(resolve => {
    log('parent');
    resolve();
  })
  .then(_ => {
    log('children');
    return 2;
  })
  .then(_id => {
    log('children lv' + _id++);
    return _id;
  })
  .then(_id => {
    return new Promise(resolve => {
      let ii = 0;
      let tmpId = setInterval(_ => {
        if (ii < 5) {
          log('children lv' + (_id + ii++));
        } else {
          clearInterval(tmpId);
          resolve('Max!');
        }
      }, 1000)
    })
  })
  .then(str => {
    log('children lv ' + str);
  });
};

let case2 = _ => {
  let x = 0;
  let y = 0;
  let logD = i => {
    let stop_time = Date.now();
    log('i: ' + i + ', x: ' + x + ', y: ' + y + ', time: ' + (stop_time - start_time) + 'ms');
  }
  new Promise(resolve => {
    let i = 0;
    let tmpId = setInterval(_ => {
      logD(i);
      if (i++ < 3) {
        x++;
      } else {
        resolve(tmpId); // tmpId 故意传进去，让那边去处理 clearInterval
      }
    }, 500);
  })
  .then(id => {
    clearInterval(id);
    return new Promise(resolve => {
      let i = 0;
      let tmpId = setInterval(_ => {
        logD(i);
        if (i++ < 3) {
          y++;
        } else {
          resolve(tmpId);
        }
      }, 500);
    });
  })
  .then(id => {
    clearInterval(id);
    log(id); // 非常好奇，为什么 node 下运行，输出是一个 Timeout 对象，而 chrome 上输出的是整形 id 本身
    log('Hi! This is the final station & id is ' + id);
  });
};


// main test block
case2();