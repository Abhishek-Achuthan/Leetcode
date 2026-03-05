/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if ( j > i + 1 &&nums[j - 1] === nums[j]) {
                continue;
            }
            let left = j + 1
            let right = nums.length - 1;
            while (left < right) {
                let value = nums[i] + nums[j] + nums[left] + nums[right]
                if (value === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left - 1] == nums[left]) {
                        left++;
                    }
                    while (right < nums.length - 1 && nums[right] == nums[right + 1] && left < right) {
                        right--;
                    }
                } else if (value < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result
};