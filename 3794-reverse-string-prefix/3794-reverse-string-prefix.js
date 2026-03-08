/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
   let array  = s.split('');
   let left = 0;
   let right = k-1;
   while(left < right) {
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    left++;
    right--;
   };
   return array.join('')
};