// link https://leetcode-cn.com/problems/reverse-integer/submissions/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x + ''
    if (x < 0) {
      s = s.split('').slice(1).reverse()
      s.unshift('-')
      s = s.join('')
      console.log(s)
    } else {
      s = s.split('').reverse().join('')
    }
    s = parseInt(s, 10)
    if (s < -2147483648 || s > 2147483647) {
      return 0
    }
    return s
};
