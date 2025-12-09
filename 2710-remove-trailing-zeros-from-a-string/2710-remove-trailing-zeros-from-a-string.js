/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let nums = num.split('').map(Number).reverse();
    let removedTrailingZeros = [];
    let index = 0;

    for(let i =0 ; i<nums.length ; i++) {
        if(nums[i]!==0) {
           index = i;
            break;
        }
    }
    for(let i =index; i<nums.length ; i++) {
        removedTrailingZeros.push(nums[i]);
    }

    return removedTrailingZeros.reverse().map(String).join('')
    
};