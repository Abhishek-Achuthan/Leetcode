/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let result = new Array(nums.length).fill(1);

   for(let i = 1; i< nums.length; i++) {
      result[i] = result[i-1] * nums[i-1]
   }
   
   let suffix = 1;
   for(let j = nums.length-2 ; j >=0 ; j--) {
      suffix *= nums[j+1]
      result[j] *= suffix
   }

   return result;
};