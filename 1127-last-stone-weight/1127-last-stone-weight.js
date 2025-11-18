/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 1) return stones[0];
    let sorted = stones.sort((a,b) => b-a);
    while(sorted.length>1) {
        let temp1 = sorted[0];
        let temp2 = sorted[1];
        sorted.splice(0,2);
        if(temp1!==temp2) {
            sorted.unshift(temp1-temp2);
        }
        sorted = sorted.sort((a,b) => b-a);
    }
    return sorted[0]??0







};