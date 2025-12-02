/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const splited = s.split('');
    let left = 0;
    let right = splited.length-1;
    const alphabets='abcdefghijklmnopqrstuvwxyz';
    while(left<right) {
        if(alphabets.includes(splited[left].toLowerCase())&& alphabets.includes(splited[right].toLowerCase())) {
           [splited[left],splited[right]] = [splited[right],splited[left]];
        left++
        right--
        }else if(!alphabets.includes(splited[left].toLowerCase())) {
            left++;
        }else if(!alphabets.includes(splited[right].toLowerCase())){
            right--
        }
    };
    return splited.join('');
};