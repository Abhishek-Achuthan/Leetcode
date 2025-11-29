/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let left = 0;
    let right = s.length-1;

    while(left<right) {
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            let temp =0;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--
        }
        if(!vowels.includes(arr[left])) {
            left++;
        }
         if(!vowels.includes(arr[right])) {
            right--;
        }

    }
    return arr.join('');
    
};