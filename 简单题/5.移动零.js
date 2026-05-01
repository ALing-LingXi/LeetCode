// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     for(let i=0;i<nums.length;i++){
//       if(nums[i]===0){
//         const zero = nums.splice(i,1)
//         i--
//         nums.push(0)
//       }
//     }
// };

// 上面的方案性能开销大，splice性能开销极大。
/**
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     for(let i=0;i<nums.length;i++){
//       if(nums[i]===0){
//         const zero = nums.splice(i,1)
//         i--
//         nums.push(0)
//       }
//     }
// };

// 上面的方案性能开销大，splice性能开销极大。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let right = nums.length - 1
//   for (let i = 0; i < nums.length; i++) {
//     let left = i
//     if (right <= left) {
//       break
//     }
//     while (nums[right] === 0) {
//       right--
//     }
//     if (nums[left] === 0) {
//       [nums[left], nums[right]] = [nums[right], nums[left]]
//       right--
//     }
//   }
// };

// 错误方案，虽然能把0移动到后面，但是打乱了相对顺序。


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0
  for (let fast = 1; fast < nums.length; fast++) {
    if(nums[slow]!==0){
      slow++
    }
    if (nums[slow] === 0 && nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
};
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log("-------", nums);

// 能过，但不够优雅


var moveZeroes = function (nums) {
    let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
};

// 这个完美。