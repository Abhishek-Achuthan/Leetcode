/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length-1;

    let maxLeft = height[left];
    let maxRight = height[right];

    let water = 0;

    while(left < right) {
        if(height[left] < height[right]) {
            left ++;
            if(height[left] > maxLeft) {
                maxLeft = height[left];
            };
            if(height[left] < maxLeft || height[left] < maxRight) {
                water += Math.min(maxLeft,maxRight) - height[left];
            }
        }else {
            right --;
            if(height[right] > maxRight) {
                maxRight = height[right];
            };
            if(height[right] < maxRight || height[right] < maxRight) {
                water += Math.min(maxLeft,maxRight) - height[right];
            }
        }
    }

    return water
};