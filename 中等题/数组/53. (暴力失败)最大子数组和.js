/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  for(let i=0;i<nums.length;i++){
    let curSum = 0
    for(let j =i;j<nums.length;j++){
      curSum+=nums[j]
      if(maxSum<curSum){
        maxSum=curSum
      }
    }
  }
  return maxSum
};