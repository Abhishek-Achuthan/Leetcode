/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack =[];

    function isDigit(num) {
        return num >='0' && num<='9'
    }
    for(let i = 0; i<s.length ; i++) {
        if(s[i] !== ']') {
            stack.push(s[i]);
        }else{
            let substring = '';
            while(stack[stack.length-1] !== '[') {
                substring = stack.pop() + substring;
            }
            stack.pop();
            let k = '';
            while(stack.length>=0&& isDigit(stack[stack.length-1])) {
                k= stack.pop() + k;
            }
            substring = substring.repeat(k);
            stack.push(substring);
        }
    }
    return stack.join('')
};