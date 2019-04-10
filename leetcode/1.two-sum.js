// link: https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

{
// err1
 let twoSum = function(nums, target) {
    let resultArr = []
    for (let i=0; i<nums.length; i++) {
      let curT = target - nums[i]
      let curIndex = nums.indexOf(curT)
      if (curIndex > -1) {
        return resultArr.concat(curIndex, i).sort()
      }
    }
 };
}

