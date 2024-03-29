/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) { // time: O(n), space: O(n)
    const seenVals = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in seenVals && (i - seenVals[nums[i]]) <= k){
            return true;
        }
        seenVals[nums[i]] = i;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const seen = {};
    
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] in seen && Math.abs(seen[nums[i]] - i) <= k) {
          return true;
      }
      seen[nums[i]] = i;
    }
    
    return false;
};