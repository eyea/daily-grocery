//  https://www.codewars.com/kata/find-the-divisors/train/javascript
{
  // 意思就是查找公约数(不包含本身)
 function divisors(integer) {
  integer = parseInt(integer, 10);
  let primeWord = integer.toString() +  ' is prime'
  if(integer===1){
    return primeWord
  }
  let res = []
  for(let n=2;n<integer;n++) {
    if(integer%n===0) {
      res.push(n)
    }
  }
  return res.length>0 ? res : primeWord;
 };
}


