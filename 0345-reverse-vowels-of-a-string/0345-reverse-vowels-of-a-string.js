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
            let temp =0;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--
            continue;
        }
    }
    return arr.join('');
};