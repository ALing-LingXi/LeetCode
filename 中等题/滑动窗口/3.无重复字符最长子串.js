// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//       let maxLength =0
//     for(let i =0;i<s.length-1;i++){
//       let left = i
//       let right = i+1
//       let currentLength=0
//       while(s[right]&&right<s.length){
//         if(s[left]!==s[right]){
//           right++
//           console.log("正常走",s[right])
//         }
//         else{
//           currentLength = right-left
//           maxLength = Math.max(maxLength,currentLength)
//           left=right
//           right++
//           console.log(s[left])
//           console.log(s[right])
//         }
//       }
//     }
//     return maxLength
// };
// console.log(lengthOfLongestSubstring("ssrt"))

// 得用滑动窗口，(map，双指针来做)


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left =0
    let maxlenth =0
    const hash = new Map()
    for(let right=0;right<s.length;right++){
      let sright = s[right]
      if(hash.has(sright)&&left<=hash.get(sright)){
        left = has.get(sright)+1
      }
      hash.set(sright,right)
      maxlenth = Math.max(maxlenth,right-left+1)
    }
    return maxlenth
};