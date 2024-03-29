/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is 0, 1, or 2.
 

Follow up:

Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;
    const out = [];
    
    for(let i = 0; i < nums.length; i++){
        switch(nums[i]){
            case 0:
                zeros++;
                break;
            case 1:
                ones++;
                break;
            case 2:
                twos++;
                break;
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        if(i < zeros) nums[i] = 0;
        else if (i < ones + zeros) nums[i] = 1;
        else nums[i] = 2;
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = new Array(3).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
      counts[nums[i]]++;
    }
    
    let k = 0;
    for (let i = 0; i < counts.length; i++) {
      for (let j = 0; j < counts[i]; j++) {
        nums[k] = i;
        k++;      
      }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length-1;
    
    let i = 0;
    while (i <= right) {
      if (nums[i] === 2) {
        [nums[i], nums[right]] = [nums[right], nums[i]];
        right--;
      } else if (nums[i] === 0) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
        left++;
        i++;
      } else {
        i++;
      }
    }
};  
  