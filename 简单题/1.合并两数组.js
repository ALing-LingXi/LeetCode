// // 筛选出num1中非零数
// // 合并数组，排序
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// let nums1 = [1, 2, 3, 0, 1, 0,]
// let nums2 = [7, 0, 8]

// var merge = function (nums1, m, nums2, n) {
//   nums1 = nums1.filter(ele => ele !== 0)
//   console.log(nums1)
//   nums2 = nums2.filter(ele => ele !== 0)
//   console.log(nums2)
//   nums2.forEach(ele => {
//     nums1.push(ele)
//   });
//   console.log(nums1)
//   for (let i = 0; i <nums1.length-1; i++) {
//     for (let j = 0; j < nums1.length-1; j++) {
//       if (nums1[j] > nums1[j + 1]) {
//         [nums1[j], nums1[j + 1]] = [nums1[j + 1], nums1[j]]
//       }
//     }
//   }
// };
// merge(nums1, nums1.length, nums2, nums2.length)
// console.log(nums1)



// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

// let nums1 = [1, 2, 3, 0, 1, 0,]
// let nums2 = [7, 0, 8]

// var merge = function (nums1, m, nums2, n) {
//   for(let i=0;i<nums2.length;i++){
//     if(nums2[i]===0){
//       nums2.splice(i,1)
//     }
//   }
//   nums2.forEach(ele => {
//     nums1.push(ele)
//   })
//   nums1.sort((a,b)=>a-b)
//   console.log(nums1)
//   for(let i=0;i<nums1.length;i++){
//     if(nums1[i]===0){
//       nums1.splice(i,1)
//       i--
//     }
//   }
// };

// merge(nums1, nums1.length, nums2, nums2.length)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [0,1,2,0]
let nums2 = [7, 0, 8]
var merge = function(nums1, m, nums2, n) {
    let val1 = nums1.slice(0,m)
    let val2 = nums2.slice(0,n)
    let sum = val1.concat(val2).sort((a,b)=>a-b)
    for(let i=0; i<m+n;i++){
      nums1[i]=sum[i]
    }
};

merge(nums1, 3, nums2, 3)
console.log(nums1);
