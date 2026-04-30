/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = k%nums.length
  if(n===0) return
    nums.reverse()
    reverse(nums,0,n-1)
    reverse(nums,n,nums.length-1)
};
function reverse(arr,start,end){
  while(start<end){
    [arr[start],arr[end]] = [arr[end],arr[start]]
    start++
    end--
  }
}