/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
 

Follow up: Can you achieve this in O(log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const pre = nums[0] <= target; // if target exists, is it in the pre-rotated section?
    
    let left = 0, right = nums.length-1;
    while(right - left > 1){
        const guess = Math.round((right + left)/2);
        if(nums[guess] === target) return guess;
        
        const guessPre = nums[guess] > nums[0]; // is guess in pre-rotated section?
        if(pre && !guessPre) {
            right = guess;
        } else if (!pre && guessPre){
            left = guess;
        } else {
            if(nums[guess] > target){
                right = guess;
            } else {
                left = guess;
            }
        }
    }
    
    if(nums[left] === target) return left;
    if(nums[right] === target) return right;
    return -1;
};