/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sort = nums.sort((a,b) => a-b);
    let result = [];
    for(let i = 0 ; i < sort.length -2; i++) {
        if(i > 0 && sort[i] === sort[i-1]) {
            continue;
        }
        let left = i+ 1;
        let right = nums.length -1;
        while(left < right) {
            let s = sort;
            if(s[left]+s[right] + s[i] === 0) {
                result.push([s[i],s[left],s[right]]);
                left ++;
                right --;
                while (s[left] === s[left-1]) left++;
                while (s[right] === s[right+1]) right--
            }else if(s[left]+s[right] + s[i] < 0) {
                left ++;
            }else {
                right --;
            }
        }
    }
    return result;
};