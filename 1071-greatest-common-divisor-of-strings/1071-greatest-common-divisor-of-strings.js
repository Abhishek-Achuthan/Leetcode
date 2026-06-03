/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let check1  = str1 + str2;
    let check2 = str2 + str1;
  
    if(check1 !== check2) return "";
    let leng1 = str1.length;
    let leng2 = str2.length;

    function findGcd(a,b){
        while(b !== 0 ) {
        let reminder = a%b;
        a = b;
        b = reminder
        }
        return a;
    }

    return str1.slice(0, findGcd(leng1,leng2))

};