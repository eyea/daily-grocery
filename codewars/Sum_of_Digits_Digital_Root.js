// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript
// 下列方法没有通过测试用例
{
  function digital_root(n) {
  let res = 0
  if(n.length===1) {
    res = n
  } else {
    n.toString().split('').map(v=>res+=parseInt(v, 10))
  }
  if(res.toString().length>1) {
    return this.digital_root(res)
  }
 }
}

// 正确
{
  function digital_root(n) {
   let res = 0
   if(n.toString().length===1){
     return res = n
   }else {
    n.toString().split('').map(v=>res+=parseInt(v, 10))
   }
   if(res>9) {
    return digital_root(res)
   }
   return res
  }
}

// 精彩解答
{
  function digital_root(n) {
   return (n - 1) % 9 + 1;
  }
}
