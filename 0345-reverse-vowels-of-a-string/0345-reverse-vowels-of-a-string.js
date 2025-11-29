/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = new Set('aeiouAEIOU');
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!vowels.has(arr[left])) { left++; continue; }
        if (!vowels.has(arr[right])) { right--; continue; }
        const tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
        left++;
        right--;
    }
    return arr.join('');
};