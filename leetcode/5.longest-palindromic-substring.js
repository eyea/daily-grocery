// link  https://leetcode-cn.com/problems/longest-palindromic-substring/submissions/
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let start = 0, end = 0
  for (let i = 0; i < s.length; i++) {
    let center = getCenter(s, i)
    let bound = expandFromCenter(s, center[0], center[1])
    let left = bound[0], right = bound[1]
    if (right - left > end - start) {
      end = right
      start = left
    }
    i = center[1]
  }
  return s.substring(start, end + 1)
}

function getCenter (s, i) {
  let left = i, right = i
  while(s[left] === s[++right] && right < s.length);
  return [left, --right]
}

function expandFromCenter (s, left, right) {
  while(s[left] === s[right] && left >= 0 && right < s.length) {
    left--
    right++
  }
  return [++left, --right]
}

// 2
// /**
 * @param {string} s
 * @return {string}
 */

let startIndex = 0
let endIndex = 0

let longestPalindrome = function(s) {
  if (s.length<2) return s


  for (let i=0; i<s.length-1;i++) {
    deep(s, i, i)
    deep(s, i, i+1)
  }
  if (endIndex >= s.length) {
    return s.substring(startIndex)
  }

  console.log(startIndex, endIndex)
  return s.substring(startIndex, endIndex)
};

let deep = function(s,left,right) {
    while (s[left] === s[right] && left>=0 && right<s.length) {
      left--
      right++
    }
    if (right-left-1 > endIndex-startIndex) {
      startIndex = left+1
      endIndex = right
    }
}
