/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const out = [];

    function recursiveParen(sol, remainingOpen, remainingClose){
        if(remainingOpen === 0 && remainingClose === 0) {
            out.push(sol);
            return;
        }
        
        if(remainingOpen > 0) 
            recursiveParen(sol + '(', remainingOpen-1, remainingClose);
        if(remainingClose > remainingOpen) 
            recursiveParen(sol + ')', remainingOpen, remainingClose-1);
    }
    recursiveParen('', n, n);
    
    return out;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  
    const out = [];
    function recursiveParen(str, openRemain, closeRemain) {
      if (openRemain === 0 && closeRemain === 0) {
        out.push(str);
        return;
      }
      
      if (openRemain > 0) recursiveParen(`${str}(`, openRemain-1, closeRemain);
      if (closeRemain > 0 && closeRemain > openRemain) recursiveParen(`${str})`, openRemain, closeRemain-1);
    }
    
    recursiveParen('', n, n);
    return out;
};
  
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const out = []
    function generateParenthesis(open, close, sol) {
      if (open === 0 && close === 0) return out.push(sol);
      
      if (open > 0) generateParenthesis(open-1, close, `${sol}(`);
      if (close > open) generateParenthesis(open, close-1, `${sol})`);
    }
    generateParenthesis(n, n, '');
    return out;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const out = [];
  function generateParen(sol, remainingOpen, remainingClose) {
    if (remainingClose === 0) return out.push(sol.join(''));
    
    if (remainingOpen > 0) {
      sol.push('(');
      generateParen(sol, remainingOpen-1, remainingClose);
      sol.pop();
    }
    if (remainingClose > remainingOpen) {
      sol.push(')');
      generateParen(sol, remainingOpen, remainingClose-1);
      sol.pop();
    }
  }
  
  generateParen([], n, n);
  return out;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const out = [];
  function recursiveGenerate(open, close, sol) {
    if (close === 0) return out.push(sol.join(''));
    
    if (close > open) {
      sol.push(')');
      recursiveGenerate(open, close-1, sol);
      sol.pop();
    }
    if (open > 0) {
      sol.push('(');
      recursiveGenerate(open-1, close, sol);
      sol.pop();
    }
  }
  recursiveGenerate(n, n, []);
  return out;
};
