/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set('aeiouAEIOU');
    let arr = s.split('');
    let left = 0;
    let right = s.length-1;
    while(left<right) {
        if(!vowels.has(arr[left])) left++;
        if(!vowels.has(arr[right])) right--;
        if(vowels.has(arr[left])&& vowels.has(arr[right])) {
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--
            continue;
        }
    }
    return arr.join('');
};