/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3)return false;
    if(arr[0]>=arr[1] || arr[arr.length-1]>=arr[arr.length-2])return false;
    let inc = true;
    for(let i=0;i<arr.length;i++){
        if(inc){
            if(arr[i+1]<=arr[i]){
                inc = false
            }
        }else{
            if(arr[i+1]>=arr[i]){
                return false;
            }
        }
    }
    return true;
};