/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const out = new Array(nums.length).fill(1);
    let product = 1;
    
    for(let i = 1; i < nums.length; i++){
        product *= nums[i-1];
        out[i] *= product;
    }

    product = 1;
    for(let i = nums.length-2; i >= 0; i--){
        product *= nums[i+1];
        out[i] *= product;
    }
    
    return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const out = [1];
      for (let i = 1; i < nums.length; i++) {
      out.push(out[i-1]*nums[i-1]);
      }
      
      let suffixProduct = nums[nums.length-1];
      for (let i = nums.length-2; i >= 0; i--) {
          out[i] *= suffixProduct;
          suffixProduct *= nums[i];
      }
      return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const out = [1];
  
  for (let i = 1; i < nums.length; i++) { 
    out.push(out[i-1] * nums[i-1]);
  }
  
  let suffixProduct = 1;
  for (let i = nums.length-2; i >= 0; i--) {
    suffixProduct *= nums[i+1];
    out[i] *= suffixProduct;
  }
  
  return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const prefixProduct = new Array(nums.length);
  const suffixProduct = new Array(nums.length);
  prefixProduct[0] = 1;
  suffixProduct[suffixProduct.length-1] = 1;
  
  for (let i = 1; i < prefixProduct.length; i++) {
    prefixProduct[i] = prefixProduct[i-1] * nums[i-1];
  }
  for (let i = suffixProduct.length-2; i >= 0; i--) {
    suffixProduct[i] = suffixProduct[i+1] * nums[i+1];
  }
  
  const out = new Array(nums.length);
  for (let i = 0; i < prefixProduct.length; i++) {
    out[i] = prefixProduct[i] * suffixProduct[i];
  }
  
  return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const out = new Array(nums.length);
  out[0] = 1;
  for (let i = 1; i < out.length; i++) {
    out[i] = out[i-1] * nums[i-1];
  }
  let suffixProduct = nums[nums.length-1];
  for (let i = out.length-2; i >= 0; i--) {
    out[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }
  
  return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const out = new Array(nums.length);
  out[0] = 1;
  
  for (let i = 1; i < nums.length; i++) {
    out[i] = out[i-1] * nums[i-1];
  }

  let suffixProduct = 1;
  for (let i = nums.length-2; i >= 0; i--) {
    suffixProduct *= nums[i+1];
    out[i] *= suffixProduct;
  }
  
  return out;
};
