{
  function narcissistic(value) {
    // 严格的说是要有对value类型的判断的
    value = value.toString().split('').map(Number);
    let sum = 0;
    for(let i=0;i<value.length;i++) {
      sum += Math.pow(value[i], value.length)
    };
    return sum === parseInt(value.join(''), 10);
  }
}


// reduce同样也是一种方案
{
  function narcissistic(value) {
    return ('' + value).split('').reduce(function(f,s){
      return f + Math.pow(f, (''+ value).length)
    }, 0) === value
  }
}
