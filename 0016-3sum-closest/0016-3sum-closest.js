/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let closest = 0;
    let diff = Infinity;
    for(let i =0 ; i< nums.length-2 ; i++) {
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let abs = Math.abs(sum - target);
            if(abs < diff) {
                diff = abs
                closest = sum
            }
            if(sum > target) {
                right--;
            }else {
                left++;
            }
        }
    }
    return closest
};