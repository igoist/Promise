let fetchX = (fn) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8000/timeline/api/');
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      fn(1);
    }
  }
  xhr.send();
};

let fetchY = (fn) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8000/timeline/api/');
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      fn(2);
    }
  }
  xhr.send();
};


function add(getX, getY, fn) {
  let x, y;
  getX((xVal) => {
    x = xVal;
    if (y != undefined) {
      console.log('Done in x');
      var stop_time = Date.now();
      console.log("this script last: " + (stop_time - start_time) + "ms");
      fn(x + y);
    }
  });
  getY((yVal) => {
    y = yVal;
    if (x != undefined) {
      console.log('Done in y');
      var stop_time = Date.now();
      console.log("this script last: " + (stop_time - start_time) + "ms");
      fn(x + y);
    }
  });
}


var start_time = Date.now();

add(fetchX, fetchY, (sum) => {
  console.log(sum);
})