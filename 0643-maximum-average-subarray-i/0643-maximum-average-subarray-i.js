/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left =0;
    let right = k-1;
    let max = -Infinity;

    while(right < nums.length) {
        let sum = 0;
        for(let i = left ; i<= right ; i++) {
            sum+= nums[i];
        }
        let avg = sum/k;

        if(avg > max){
            max = avg;
        }
        left ++;
        right ++;
    }
    return max;

};