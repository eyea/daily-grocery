1. [].slice()和Array.slice.call()
  1. Array是浏览器内置对象 没有slice方法，他的实例有slice方法；
  2. Array的prototype上有slice的方法；
  3. 我们可以通过Array.prototype来打印有哪些方法；
2. 将类数组转化成数组
```bash
let likeArr = {length:2,0:'1',2:'2'}
Array.prototype.slice().call(likeArr) // [1,undefined,2]
```
3. slice的内部实现
```bash

 Array.prototype.slice = function(begin,end){
   let result = new Array();
   begin = begin || 0
   end = end || this.length // this指向调用的对象，当用call后，能够改变this的指向
   for(let i=begin;i<end;i++){
     result.push(this[i])
   }
   return result
 }
```
