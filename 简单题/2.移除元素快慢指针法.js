/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let right = 0
    while(right<nums.length){
      if(nums[right]!==val){
        nums[left]=nums[right]
        left++
      }
      right++
      console.log(aaa)
    }
    return left
};

let nums =[0,1,2,2,3,0,4,2]
let val = 2
removeElement(nums,val)
console.log(nums)