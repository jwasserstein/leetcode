/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {    
    const hashMap = {};
    const words = s.split(' ');
    
    if(pattern.length !== words.length) return false;
    
    for(let i = 0; i < words.length; i++){
        if(!(pattern[i] in hashMap)){
            if(Object.values(hashMap).includes(words[i])){
                return false;
            }
            hashMap[pattern[i]] = words[i];
        } else {
            if(hashMap[pattern[i]] !== words[i]) {
                return false
            };
        }
    }
    return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternMap = {};
    const usedWords = new Set();
    const sentence = s.split(' ');
    
    if (pattern.length !== sentence.length) return false;
    
    for(let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (char in patternMap) {
        if (patternMap[char] !== sentence[i]) return false;
      } else {
        if (usedWords.has(sentence[i])) return false;
        patternMap[char] = sentence[i];
        usedWords.add(sentence[i]);
      }
    }
    
    return true;
};
  