/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let minOperation =0;
    for(let i =0 ; i<=nums.length-1 ; i++){
       if(nums[i]%3!==0){
        minOperation++;
       }
    }
    return minOperation
};