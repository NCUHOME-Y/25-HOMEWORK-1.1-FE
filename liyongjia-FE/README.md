# 神奇的await
感谢学长们帮助
## 问题：用 document.addEventListener("DOMContentLoaded", function ()) 不起作用(未被执行)

### 解决：1.将其放在await 之前  2.可以新建一个.js文件 外部引入来导入


await 通常用于拆开 promise 的包装，使用方法是传递一个 Promise 作为 expression。使用 await 总会暂停当前异步函数的执行，在该 Promise 敲定（settled，指兑现或拒绝）后继续执行。函数的执行恢复（resume）时，await 表达式的值已经变成了 Promise 兑现的值。

若该 Promise 被拒绝（rejected），await 表达式会把拒绝的原因（reason）抛出。当前函数（await 所在的函数）会出现在抛出的错误的栈追踪（stack trace），否则当前函数就不会在栈追踪出现。