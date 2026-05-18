/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result =[]
    let set = new Set(nums)
    let hash = {};

    for(let el of nums) {
        hash[el] = (hash[el] || 0) +1
    };

    for(let el in hash) {
        if(hash[el] == 2) {
            result.push(Number(el))
        }
    }

    for(let i = 1 ; i<=nums.length ; i++) {
        if(!set.has(i)) {
            result.push(i)
        }
    }

    return result
};