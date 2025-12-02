/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const splited = s.split('');
    let left = 0;
    let right = splited.length-1;
    const re = /[A-Za-z]/;
    while(left<right) {
        if(splited[left].match(re) && splited[right].match(re)) {
           [splited[left],splited[right]] = [splited[right],splited[left]];
        left++
        right--
        }else if(!splited[left].match(re)) {
            left++;
        }else if(!splited[right].match(re)){
            right--
        }
    };
    return splited.join('');
};