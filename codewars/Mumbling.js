// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"

{
  function accum(s) {
    let temStrArr = s.split('');
    let resArr = [];
    for(let i=0;i<temStrArr.length;i++) {
      let fc = temStrArr[i].toUpperCase();
      let lc = temStrArr[i].toString().toLowerCase().repeat(i);
      resArr.push(fc+lc)
    }
    return resArr.join('-')
  }
}


// others
{
  function accum(s) {
    return s.split('').map((x,index) => 
      x.toUpperCase()+Array(index+1).join(x.toLowerCase())
   ).join('-');
  }
}
