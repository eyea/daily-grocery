// url: https://www.codewars.com/kata/highest-and-lowest/train/javascript
function highAndLow(numbers) {
  let arr = [];
  let temNum = numbers.split(' ');
  arr.push(temNum[0]); // 初始化arr
  for(let i=0;i<temNum.length;i++) {
    // arr数组从小到大进行排列
    if(arr[0]>temNum[i]){
      arr.unshift(temNum[i])
    };
    if(arr[arr.length-1]<arr[i]){
      arr.push(temNum[i])
    }
  }
  return arr[arr.length-1] + ' ' + arr[0]
};

// 上面是第一版，并不明显的错误  当测试string是'4 5 29 54 4 0 -214 542 -64 1 -3 6 -6',可以看一下
function highAndLow2(numbers){
  let arr = [];
  let temNum = numbers.split(' ')
  if(arr.length<1){arr.push(temNum[0])}
  for(let i=0;i<temNum.length;i++) {
    if(arr[0]>Number(temNum[i])){arr.unshift(temNum[i])}; // 将第一个作为最小的元素
    if(arr[arr.length-1]<Number(temNum[i])){arr.push(temNum[i])}
  }
  return arr[arr.length-1] + ' ' + arr[0]
};
// 注意 字符串的比较的是ASCII码  和数字的比较是不一样的。


{
  // 发现一种好的实现方式
  function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }
}


{
 function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
 }
}
