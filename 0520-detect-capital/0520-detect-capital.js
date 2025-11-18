/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    if(word.toUpperCase()===word) return true
    if(word.toLowerCase() === word) return true;

    if(word[0]===word[0].toUpperCase()){
        if(word.slice(1).toLowerCase()===word.slice(1)){
            return true;
        }
        return false
    }
    return false
    
};