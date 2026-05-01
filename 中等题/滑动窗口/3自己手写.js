/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left =0
    let maxlength =0
    const hash = new Map()
    for(let right=0;right<s.length;right++){
      let sright = s[right]
      if(hash.has(sright)&&left<=hash.get(sright)){
        left = hash.get(sright)+1
      }
      hash.set(sright,right)
      maxlength=Math.max(maxlength,right-left+1)
    }
    return maxlength
};