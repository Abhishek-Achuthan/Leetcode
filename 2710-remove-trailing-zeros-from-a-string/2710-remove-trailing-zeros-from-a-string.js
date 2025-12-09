/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let nums = num.split('').map(Number).reverse();

    while (nums[0] === 0) {
        nums.shift();
    }

    return nums.reverse().join('');
    
};