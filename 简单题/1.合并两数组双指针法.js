/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let t1 = m-1
    let t2 =n-1
    let t3 = m+n-1
    while(t1>=0&&t2>=0){
      if(nums1[t1]>nums2[t2]){
        nums1[t3] = nums1[t1]
        t1--
        t3--
      }
      else{
        nums1[t3]=nums2[t2]
        t2--
        t3--
      }
    }
      while(t2>=0){
        nums1[t3] = nums2[t2]
        t2--
        t3--
      }
};