/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let sum = [];
    for(let i = 0; i<nums.length ; i++) {
        let splited = nums[i].toString().split('');
        let val = splited.reduce((acc,curr) => Number(curr)+Number(acc),0);
        sum.push(val)
    }

    return Math.min(...sum)
};