/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let prefix = new Array(nums.length).fill(1);
   let suffix = new Array(nums.length).fill(1);
   let result = [];

   for(let i = 1; i< nums.length; i++) {
      prefix[i] = prefix[i-1] * nums[i-1]
   }
   
   for(let j = nums.length-2 ; j >=0 ; j--) {
      suffix[j] = suffix[j+1] * nums[j+1]
   }
  
   for(let i = 0; i< nums.length ; i++) {
     result.push(prefix[i] * suffix[i])
   }

   return result;
};