/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let maxFrequency = 0;
    const frequencyMap = new Map();

    while(right < s.length){
        let currentChar = s[right];
        
        frequencyMap.set(currentChar,(frequencyMap.get(currentChar)??0)+1);

        maxFrequency = Math.max(maxFrequency,frequencyMap.get(currentChar));

        while((right-left+1)-maxFrequency > k){
           let leftChar = s[left];
           frequencyMap.set(leftChar,(frequencyMap.get(leftChar)??0)-1);
           left++;
        }

        maxLength = Math.max(maxLength,(right-left+1));
        right++;
    }
    return maxLength;
};