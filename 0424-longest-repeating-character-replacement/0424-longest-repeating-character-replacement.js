/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxFreq = 0;
    let maxLength = 0;
    let left =0;
    let right = 0;
    let freq = new Map();
    while(right < s.length){
      freq.set(s[right] , (freq.get(s[right]) || 0) + 1);

      maxFreq = Math.max(maxFreq,freq.get(s[right]));

      while((right-left+1) - maxFreq > k) {
         freq.set(s[left],freq.get(s[left])-1);
         left++;
      }
      maxLength = Math.max(maxLength,right-left+1);

      right++
    }
    return maxLength
}