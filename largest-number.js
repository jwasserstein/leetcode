/*
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const stringNums = nums.map(num => String(num));
  stringNums.sort((a, b) => Number(b + a) - Number(a + b));
  const out = stringNums.join('');
  if (out[0] === '0') return '0'
  return out;
};
