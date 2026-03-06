/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++
            r--;
        }
        return true;
    }
    while (left < right) {
        if (s[left] !== s[right]) {
            if (isPalindrome(left + 1, right)) {
                left++;
            } else if (isPalindrome(left, right - 1)) {
                right--;
            } else {
                return false;
            }
        }
        left++;
        right--;
    }
    return true;
};