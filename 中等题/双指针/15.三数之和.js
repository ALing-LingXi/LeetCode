// // /**
// //  * @param {number[]} nums
// //  * @return {number[][]}
// //  */
// // var threeSum = function(nums) {
// //     const arr = []
// //     for(let i =0;i<nums.length;i++){
// //       for(let j=i+1;j<nums.length;j++){
// //         for(let k=j+1;k<nums.length;k++){
// //           if(nums[i]+nums[j]+nums[k]===0){
// //             arr.push([nums[i],nums[j],nums[k]])
// //           }
// //         }
// //       }
// //     }
// //     return arr
// // };

// // let nums = [-1,0,1,2,-1,-4]
// // console.log(threeSum(nums))

// // var threeSum = function(nums) {
// //     const arr = []
// //     // 1. 第一步：必须先排序！这样相同的数字会挨在一起
// //     nums.sort((a, b) => a - b)

// //     for (let i = 0; i < nums.length; i++) {
// //         // 2. 如果当前数字和上一个数字相同，跳过（去重第一层）
// //         if (i > 0 && nums[i] === nums[i - 1]) continue

// //         for (let j = i + 1; j < nums.length; j++) {
// //             // 3. 如果当前数字和上一个数字相同，跳过（去重第二层）
// //             // 注意：j > i + 1 是为了保证不跟当前的 i 比较
// //             if (j > i + 1 && nums[j] === nums[j - 1]) continue

// //             for (let k = j + 1; k < nums.length; k++) {
// //                 // 4. 如果当前数字和上一个数字相同，跳过（去重第三层）
// //                 if (k > j + 1 && nums[k] === nums[k - 1]) continue

// //                 if (nums[i] + nums[j] + nums[k] === 0) {
// //                     arr.push([nums[i], nums[j], nums[k]])
// //                 }
// //             }
// //         }
// //     }
// //     return arr
// // }

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   const arr = []
//   const sortNums = nums.sort((a, b) => a - b)
//   for (let i = 0; i < sortNums.length; i++) {
//     let left = i + 1
//     let right = sortNums.length - 1
//     if (i >= 0 && nums[i] === nums[i - 1])
//       continue
//     while (left < right) {
//       if (sortNums[left] + sortNums[i] + sortNums[right] === 0) {
//         arr.push([sortNums[left], sortNums[i], sortNums[right]])
//         left++,right--
//       }
//       while(sortNums[left]===sortNums[left-1]) left++
//       while(sortNums[right]===sortNums[right+1]) right--
//       if (sortNums[left] + sortNums[i] + sortNums[right] < 0) {
//         left++
//       }
//       else {
//         right--
//       }
//     }

//   }
//   return arr
// };




//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   const arr = []
//   const sortNums = nums.sort((a, b) => a - b)
//   for (let i = 0; i < sortNums.length; i++) {
//     let left = i + 1
//     let right = sortNums.length - 1
//     if (i >= 0 && nums[i] === nums[i - 1])
//       continue
//      while (left < right) {
//     // 每次进循环，先算最新的总和，别的地方都不准算
//     let sum = nums[i] + nums[left] + nums[right];

//     if (sum === 0) {
//         // 只有在这里，我们才处理“中了”的情况
//         arr.push([nums[i], nums[left], nums[right]]);
//         while (nums[left] === nums[left + 1]) left++;
//         while (nums[right] === nums[right - 1]) right--;
//         left++;
//         right--;
//     } 
//     else if (sum < 0) {
//         // 只有在这里，我们处理“小了”的情况
//         left++; 
//     } 
//     else {
//         // 只有在这里，我们处理“大了”的情况
//         right--;
//     }
//     // 只要执行完上面任意一个块，就会跳回 while 开头重新算 sum
// }

//   }
//   return arr
// };
  