/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1,1,2,2,3,3,4,5,6,7,7]
var removeDuplicates = function(nums) {
    if(nums.length===0) return 0
    let left=0
    for(let right=1;right<nums.length;right++){
      if(nums[left]!==nums[right]){
        left++
        nums[left]=nums[right]
      }
    }
};

removeDuplicates(nums)
console.log(nums)