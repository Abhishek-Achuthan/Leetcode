/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let indices = [];

    let sorted = nums.sort((a,b) =>a-b);

    for(let i=0;i<nums.length ;i++) {
        if(sorted[i]===target){
            indices.push(i)
        }
    }
    return indices

};