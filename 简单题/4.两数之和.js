// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//       for(let j=0;j<nums.length;j++){
//         if(nums[i]+nums[j]===target&&i!==j)
//         {
//           console.log(nums[i],nums[j])
//           return [i,j]
//         }
//       }
//     }
// };
// let nums=[3,2,4]
// let target=6
// console.log(twoSum(nums,target));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target)
        {
          console.log(nums[i],nums[j])
          return [i,j]
        }
      }
    }
};
let nums=[3,2,4]
let target=6
console.log(twoSum(nums,target));
