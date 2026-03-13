/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left =0;
    let right = k-1;
    let maxAvg = -Infinity;
    let maxSum = 0;
    for(let i = 0 ; i< k ; i++) {
        maxSum += nums[i];
    }
    while(right < nums.length) {
        let avg = maxSum/k;
        if(avg > maxAvg){
            maxAvg = avg;
        }
        left ++;
        right ++;
        maxSum = maxSum - nums[left-1] + nums[right];
    }
    return maxAvg;
};