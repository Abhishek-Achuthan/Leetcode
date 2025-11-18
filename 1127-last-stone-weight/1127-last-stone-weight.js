/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    if(stones.length === 1) return stones[0];

    let sorted = stones.sort((a,b) => b-a);

    for(let i = 0; i<sorted.length-1 ; i++) {
        if(sorted[i] === sorted[i+1]) {
            sorted.splice(i,2);
            i--;
        }else if(sorted[i] != sorted[i+1]) {
            let val = sorted[i]-sorted[i+1]
            sorted.push(val);
            sorted.splice(i,2);
            sorted.sort((a,b) => b-a)
            i--;
        }
    }
    return sorted[0]?? 0;







};