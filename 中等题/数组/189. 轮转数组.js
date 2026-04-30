/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  k %= n; 
  
  // 1. 截取末尾的 k 个元素
  // 2. 将它们插入到数组的最前面
  const tail = nums.splice(n - k, k);
  console.log(tail)
  console.log(nums)
  console.log(...tail)
  nums.unshift(...tail);
  console.log(nums)
};
rotate([1,2,3,4,5,6,7],3)