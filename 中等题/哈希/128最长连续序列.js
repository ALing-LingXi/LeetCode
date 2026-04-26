/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums)
    let longNum =0
    for (const num of numSet){
      if(!numSet.has(num-1)){
        let currentCount = 1
        let current = num
        while(numSet.has(current+1)){
          currentCount++
          current++
        }
        longNum = Math.max(longNum,currentCount)
      }
    }
    return longNum
};