/*
Given a sentence text (A sentence is a string of space-separated words) in the following format:

First letter is in upper case.
Each word in text are separated by a single space.
Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

Return the new text following the format shown above.

 

Example 1:

Input: text = "Leetcode is cool"
Output: "Is cool leetcode"
Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
Output is ordered by length and the new first word starts with capital letter.
Example 2:

Input: text = "Keep calm and code on"
Output: "On and keep calm code"
Explanation: Output is ordered as follows:
"On" 2 letters.
"and" 3 letters.
"keep" 4 letters in case of tie order by position in original text.
"calm" 4 letters.
"code" 4 letters.
Example 3:

Input: text = "To be or not to be"
Output: "To be or to be not"
 

Constraints:

text begins with a capital letter and then contains lowercase letters and single space between words.
1 <= text.length <= 10^5
*/

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  const words = text.split(' ');
  words[0] = words[0].toLowerCase();
  
  words.sort((a, b) => a.length - b.length);
  
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  
  return words.join(' ');
};

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  const lengthMap = {};
  const words = text.split(' ');
  words[0] = words[0].toLowerCase();
  
  let maxLen = 0;
  for (let i = 0; i < words.length; i++) {
    maxLen = Math.max(maxLen, words[i].length);
    if (words[i].length in lengthMap) {
      lengthMap[words[i].length].push(words[i]);
    } else {
      lengthMap[words[i].length] = [words[i]];
    }
  }
  
  const out = [];
  for (let i = 0; i <= maxLen; i++) {
    const words = lengthMap[i];
    if (words) {
      for (let j = 0; j < words.length; j++) {
        out.push(words[j]);
      } 
    }
  }
  out[0] = out[0][0].toUpperCase() + out[0].slice(1);
  
  return out.join(' ');
};
