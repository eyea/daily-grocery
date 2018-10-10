// url https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
{
 function spinWords(){
  let str = arguments[0]
  let result = str.split(' ').map(v=>{
    if(v.length>4){
      return v.split('').reverse().join('')
    }
    return v
  })
  return result.join(' ')
 }
}

{
  function spinWords() {
    let result = arguments[0].split(' ').map(v=>v.length>4 ? v.split('').reverse().join('') : v);
    return result.join(' ');
  }
}


// for better 
{
  function spinWords(words) {
    return words.replace(/\w{5,}/g, function(w){
      return w.split('').reverse().join('');
    });
  }
}
