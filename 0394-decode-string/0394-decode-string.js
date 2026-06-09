/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack =[];
    let si = -1;

    function isDigit(num) {
        return num >='0' && num<='9'
    }

    for(let i = 0; i<s.length ; i++) {
        if(s[i] !== ']') {
            stack.push(s[i]);
            si++;
        }else{
            let substring = '';
            while(stack[si] !== '[') {
                substring = stack.pop() + substring;
                si--
            }
            stack.pop();
            si--
            let k = '';
            while(stack.length >=0&& isDigit(stack[si])) {
                k= stack.pop() + k;
                si--;
            }

            substring = substring.repeat(k);
            stack.push(substring);
            si+=1
        }
    }
    return stack.join('')
};