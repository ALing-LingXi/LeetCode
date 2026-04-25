/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {} //储存 值--索引
    for(let i=0;i<nums.length;i++){
      const curnum = nums[i]
      const dirnum = target-curnum
      const dirnumIndex = hash[dirnum]
      if(dirnumIndex!==undefined){
        return [dirnumIndex,i]
      }
      else{
        hash[curnum]=i
      }
    }
};