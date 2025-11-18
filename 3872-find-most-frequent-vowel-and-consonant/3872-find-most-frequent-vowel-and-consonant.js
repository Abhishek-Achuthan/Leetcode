/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let hash = {};
    for(let val of s) {
        hash[val] = (hash[val] || 0)+1;
    }
    let vowels = new Set(['a','e','i','o','u']);
    let maxVowel = 0;
    let maxConsonant = 0;

    for(const [ch,cnt] of Object.entries(hash)) {
        if(vowels.has(ch)) {
            if(cnt > maxVowel) maxVowel = cnt;
        }else{
            if(cnt > maxConsonant) maxConsonant = cnt;
        }
    }

    return maxVowel + maxConsonant;

};