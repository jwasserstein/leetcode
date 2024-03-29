/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let minLen = Infinity;
  let left = 0; // inclusive
  let right = 0; // inclusive
  let sum = nums[0];
  
  while (right < nums.length) {
    if (sum < target) {
      right++;
      sum += right < nums.length ? nums[right] : 0;
    } else {
      minLen = Math.min(minLen, getLen(left, right));
      sum -= nums[left];
      left++;
    }
  }

  return minLen < Infinity ? minLen : 0;
};

function getLen(left, right) {
  return right - left + 1;
}
