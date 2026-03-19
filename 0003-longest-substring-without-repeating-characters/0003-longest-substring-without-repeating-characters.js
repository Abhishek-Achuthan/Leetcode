/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let set = new Set();
    let max = 0;

    while(right < s.length){
        if(!set.has(s[right]) ){
            set.add(s[right])
            right++;
        }else {
            while(set.has(s[right])){
                max = Math.max(max,set.size);
                set.delete(s[left]);
                left++;
            }
        }
        max = Math.max(max,set.size)
    }
    return  max
};