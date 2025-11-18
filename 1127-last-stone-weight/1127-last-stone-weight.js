/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 1) return stones[0];
    let sorted = stones.sort((a,b) => a-b);
    while(sorted.length>1) {
        let temp1 = sorted.pop();
        let temp2 = sorted.pop();
        if(temp1!==temp2) {
            sorted.push(temp1-temp2);
        }
        sorted = sorted.sort((a,b) => a-b);
    }
    return sorted[0]??0







};