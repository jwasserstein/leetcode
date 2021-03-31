/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

Notes:

S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.
*/

/**
 * @param {string} S
 * @return {string}
 */
 var toGoatLatin = function(S) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    const words = S.split(' ');
    let word = '', sentence = '';
    for(let i = 0; i < words.length; i++){
        word = words[i];
        
        if(!vowels.has(word[0].toLowerCase())) {
            word = word.slice(1) + word[0];
        }
        word += 'ma';
        for(let j = 0; j <= i; j++){
            word += 'a';
        }
        sentence += word;
        if(i !== words.length - 1) sentence += ' ';
    }
    
    return sentence;
};