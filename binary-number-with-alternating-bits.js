/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

Example 1:

Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101
Example 2:

Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.
Example 3:

Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.
Example 4:

Input: n = 10
Output: true
Explanation: The binary representation of 10 is: 1010.
Example 5:

Input: n = 3
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let lastBit = n & 1;
    let sum = lastBit;
    let i = 1;
    
    while(sum < n){
        const val = n & (1 << i);
        sum += val;
        const bit = val === 0 ? 0 : 1;
        if(bit === lastBit) return false;
        i++;
        lastBit = bit;
    }
    
    return true;
};

var hasAlternatingBits2 = function(n) {
    return (((n & (n >> 1)) === 0) && ((n & (n >> 2)) === (n >> 2)));
};