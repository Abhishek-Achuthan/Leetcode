/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map = {};

    for(let num of nums) {
        map[num] = (map[num] || 0) +1;

        if(map[num] ===2) {
            return num
        }
    }

  
    
    };