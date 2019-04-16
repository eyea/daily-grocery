// link https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num = 0
    let arr = [].concat(nums1, nums2).sort(function(cur,next){ return cur - next}) // 正序排列
    let alen = arr.length
    let half = Math.floor(alen / 2)
    let isOdd = arr.length % 2
    num = isOdd !== 0 ? arr[half] : (arr[half] + arr[half-1]) / 2
    return num
};
