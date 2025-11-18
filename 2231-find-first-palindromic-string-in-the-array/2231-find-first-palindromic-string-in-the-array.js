/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   for(let i = 0; i<words.length ; i++) {
      let splited = words[i].split('').reverse().join('');
      if(splited===words[i]) return words[i] 
   }
   return ''
};