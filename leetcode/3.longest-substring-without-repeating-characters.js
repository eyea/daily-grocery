// link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let sl = s.length
  let str = ''
  let num = 0
  for (let i=0; i<sl; i++) {
    let curIndex = str.indexOf(s[i])
    if (curIndex > -1) { // 如果存在，取之后的部分
      str = str.substring(curIndex+1)
    }
    str += s[i]
    num = Math.max(num, str.length)
  }
  return num
};
