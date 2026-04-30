/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = nums[0]
    let max = nums[0]
    for(num of nums){
      pre = Math.max(pre+num,num)
      max = Math.max(max,pre)
    }
    return max
};