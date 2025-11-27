/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let c = coordinates
    let dy0 = c[1][1]-c[0][1];
    let dx0 = c[1][0]-c[0][0];
    
    for(let i =0; i<c.length-1 ; i++) {
        let dy = c[i+1][1]-c[i][1];
        let dx = c[i+1][0]-c[i][0];
        if(dy * dx0 !== dx * dy0) {
            return false
        }
    }
    return true;
};