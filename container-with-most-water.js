/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 3 * 104
0 <= height[i] <= 3 * 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i; j < height.length; j++){
            const area = Math.min(height[i], height[j]) * (j-i);
            maxArea = Math.max(area, maxArea);
        }
    }
    return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
    while(right > left){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right])*(right-left));
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
    
    while (left < right) {
      const currArea = Math.min(height[left], height[right])*(right-left);
      maxArea = Math.max(maxArea, currArea);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    
    return maxArea;
};
  