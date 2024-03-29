/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Example 2:

Input: n = 0
Output: false
Example 3:

Input: n = 9
Output: true
Example 4:

Input: n = 45
Output: false
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (Math.log(n) / Math.log(3)) % 1 < 10**(-13);
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree2 = function(n) {
    return n > 0 && 1162261467 % n === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for (let i = 0; i <= 19; i++) {
      if (n === 3**i) return true;
    }
    return false;
};
  