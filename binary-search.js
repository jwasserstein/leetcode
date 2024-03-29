/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-9999 <= nums[i], target <= 9999
All the integers in nums are unique.
nums is sorted in an ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let i = Math.round((left + right)/2);
    while(right - left > 1){
        if(nums[i] > target) {
            right = i;
            i = Math.round((left + right)/2);
        } else if(nums[i] < target) {
            left = i;
            i = Math.round((left + right)/2);
        } else {
            return i;
        }
    }
    if(nums[right] === target) return right;
    if(nums[left] === target) return left;
    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    
    while (right - left > 1) {
      const guess = Math.round((left + right) / 2);
      if (nums[guess] < target) {
        left = guess;
      } else if (nums[guess] > target) {
        right = guess;
      } else {
        return guess;
      }
    }
    
    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  
  while (left <= right) {
    const guess = Math.floor((left + right) / 2);
    
    if (nums[guess] < target) {
      left = guess + 1;
    } else if (nums[guess] > target) {
      right = guess - 1;
    } else {
      return guess;
    }
  }
  
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  
  while (left <= right) {
    const guess = Math.floor((left + right) / 2);
    
    if (nums[guess] > target) {
      right = guess - 1;
    } else if (nums[guess] < target) {
      left = guess + 1;
    } else {
      return guess;
    }
  }
  
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  
  while (left <= right) {
    const guess = Math.floor((right + left) / 2);
    if (nums[guess] < target) {
      left = guess + 1;
    } else if (nums[guess] > target) {
      right = guess - 1;
    } else {
      return guess;
    }
  }
  
  return -1;
};
