/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let result = {};
    for(let char of strs) {
        let key = char.split('').sort().join('');

        if(!result[key]){
            result[key] = [];
            result[key].push(char)
        }else [
            result[key].push(char)
        ]
    }

    return Object.values(result)

};