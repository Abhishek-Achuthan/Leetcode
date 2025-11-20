/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num<2) return true
    let l = 0;
    let r = num/2
    while(l<=r) {
        let mid = Math.floor((l+r)/2)
        if(mid*mid == num) {
            return true;
        }else if(mid*mid<num){
            l = mid+1;
        }else{
            r=mid-1
        }
    }
        return false
};