/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right  = nums.length - 1;

    const result = new Array(nums.length).fill(null);
    let length = nums.length-1;

    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[length] = nums[left] * nums[left];
            length--;
            left++
        }else {
            result[length] = (nums[right] * nums[right])
            length--;
            right--;
        }
    }
    return result
};