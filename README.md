# Promise

Learn Promise, exercise or code some demo

## 概念须知

可参考[自己动手实现ES6 Promise](https://www.jianshu.com/p/48e193c4662e)

使用 Promise 的地方，代码看上去经常是这样的

```javascript
myReadFile('theFirst.json')
.then(JSON.parse)
.then(fn1)
.then(fn2)
.then(fn3)
.catch(console.error.bind(console))
```

上面这个例子中，真正能够异步的，只有第一步而已。一旦那个resolve被调用，后面的一连串都会顺着执行。就像多米诺骨牌一样。

那么如果中间有另一个地方需要异步怎么办呢，比如我需要读取另外一个文件？ 你只需要在某个传给then的函数里面，返回一个新的Promise对象就行。

```javascript
myReadFile('theFirst.json')
.then(JSON.parse)
.then(fn1)
.then(d => myReadFile('theSecond.json'))
.then(JSON.parse)
.then(fn3)
.catch(console.error.bind(console))
```


### 各文件内容备忘

* t0000 -- 瞎写，怎么方便怎么来
* t0001 -- 模拟/实现书本 p181 中例子
* t0002 -- 模拟/实现书本 p183 中例子，涉及 Promise.all
* t0003 -- 单个 Promise 测试 resolve & reject，以及 .then
* t0004 -- Promise 中的时序验证