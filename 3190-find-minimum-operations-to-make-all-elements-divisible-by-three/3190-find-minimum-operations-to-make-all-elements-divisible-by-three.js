/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let min =0;
    for(let i =0 ; i<=nums.length-1 ; i++){
        if((nums[i]+1)%3==0){
            min++;
        }else if((nums[i]-1)%3==0){
            min++;
        }
    }
    return min
};