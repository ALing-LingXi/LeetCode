/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1,1,2,2,3,3,4,5,6,7,7]
var removeDuplicates = function(nums) {
    let left = 0
    let right = 1
    while(right<=nums.length){
      if(nums[left]===nums[right])
       {
         nums.splice(right,1)
       }
       else{
        left++
        right++
       }
    }
};
removeDuplicates(nums)
console.log(nums)