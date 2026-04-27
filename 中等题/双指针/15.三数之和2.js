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
//     if(nums[i]>0)break;
//     if (i > 0 && nums[i] === nums[i - 1])
//       continue
//     while (left < right) {
//       if (sortNums[left] + sortNums[i] + sortNums[right] === 0) {
//         arr.push([sortNums[left], sortNums[i], sortNums[right]])
//         left++, right--
//         while (left<right&&sortNums[left] === sortNums[left - 1]) left++
//         while (left<right&&sortNums[right] === sortNums[right + 1]) right--
//       }
//      else if (sortNums[left] + sortNums[i] + sortNums[right] < 0) {
//         left++
//       }
//       else {
//         right--
//       }
//     }

//   }
//   return arr
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const arr =[]
    const sortArr = nums.sort((a,b)=>a-b)
    for(let i=0;i<sortArr.length-2;i++){
      let left = i+1
      let right = sortArr.length-1
      if(nums[i]>0) break
      if(i>0&&nums[i]===nums[i-1]) continue;
      while(left<right){
        if(sortArr[i]+sortArr[left]+sortArr[right]===0){
          arr.push([sortArr[i],sortArr[left],sortArr[right]])
          left++
          right--
          while(left<right&&sortArr[left]===sortArr[left-1])left++
          while(left<right&&sortArr[right]===sortArr[right+1])right--
        }
        else if(sortArr[i]+sortArr[left]+sortArr[right]<0){
          left++
        }
        else{
          right--
        }
      }
    }
    return arr
};