// link https://leetcode-cn.com/problems/string-to-integer-atoi/submissions/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let res = parseInt(str, 10)
    if (!res) {
      return 0
    }
    if (res < parseInt('-2147483648', 10)) {
      return  -2147483648
    }
    if (res > parseInt('2147483648',10)-1 ) {
      return  2147483647
    }
    return res
};
