// link https://leetcode-cn.com/problems/palindrome-number/submissions/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x + ''
    let res = s.split('').reverse().join('')
   return s === res ? true : false
};
