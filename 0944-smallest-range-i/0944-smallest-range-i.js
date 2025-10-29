/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    nums.sort((a,b) => a-b)

    console.log(nums)

    let flmt = k;

    for (let i = 0; i < k; i++) {
        if (nums[0] < nums[nums.length - 1] && flmt >0) {
            nums[0] ++;
            flmt--
            
        }
    }
    


    let max = nums[nums.length - 1];
    let limit = k;
    for (let i = 0; i < limit; i++) {
        if (max > nums[0] && limit > 0) {
            max--
        }
    }

    console.log(nums[0], max)
    return max - nums[0];

};