/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let maxArea = 0
    while(left<right){
      let waterHight = Math.min(height[left],height[right])
      let width = right-left
      let currentWidth = waterHight*width
      if(maxArea<currentWidth){
        maxArea=currentWidth
      }
      if(height[left]<height[right]){
        left++
      }
      else{right--}
    }
    return maxArea
};