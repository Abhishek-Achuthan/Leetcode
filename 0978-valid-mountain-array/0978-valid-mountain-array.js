/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3) return false;
    let lg = arr.length
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max)
    if(maxIndex===0 || maxIndex===lg-1)return false;
    if(max===arr[arr.length-1]) return false
    let answer = true;
    for(let i = 0 ; i<lg ; i++) {
        if(i < maxIndex) {
            if(arr[i+1]<=arr[i]) {
                answer = false;
            }
        }else{
            if(arr[i+1]>=arr[i]) {
                answer = false;
            }
        }
    }
    return answer;
};