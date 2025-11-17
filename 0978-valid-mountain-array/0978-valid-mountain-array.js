/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max = Math.max(...arr);
        let dec = false;
    if (arr.length < 3) return false;

    if (arr[0] > arr[1]) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        } else if (arr[i] > arr[i + 1] && dec === false) {
            dec = true;
        } else if (arr[i] < arr[i + 1] && dec === true) {
            return false;
        }
    }

    if (dec === false) {
        return false
    }
    return true






};