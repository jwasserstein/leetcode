/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

 

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 

Constraints:

1 <= n <= 104
nums.length == 2 * n
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => (a - b));
    let sum = 0;
    for(let i = 0; i < nums.length; i+= 2){
        sum += nums[i];
    }
    return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum2 = function(nums) {
    quickSort(nums, 0, nums.length-1);
    let sum = 0;
    for(let i = 0; i < nums.length; i+= 2){
        sum += nums[i];
    }
    return sum;
};

function quickSort(arr, leftBound, rightBound){
    if(rightBound <= leftBound) return;
    
    let pivot = rightBound;
    let left = leftBound;
    let right = rightBound - 1;
    while(left <= right){
        if(arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else {
            if(arr[left] <= arr[pivot]) left++;
            if(arr[right] >= arr[pivot]) right--;
        }
    }
    [arr[left], arr[pivot]] = [arr[pivot], arr[left]];
    pivot = left;
    quickSort(arr, leftBound, pivot-1);
    quickSort(arr, pivot+1, rightBound);
}