/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    let index = -1;
    for(let i = 0 ; i< s.length ; i++) {
        if(i> 0 && s[i] === stack[index]) {
            stack.pop();
            index--;
            continue;
        }else {
            stack.push(s[i]);
            index++;
        }
    }
    return stack.join('')
};