/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    let spaceS = 0;
    let spaceT = 0;
    while (p1 >= 0 || p2 >= 0) {
        while (p1 >= 0) {
            if (s[p1] === '#') {
                spaceS++;
                p1--;
            } else if (spaceS > 0) {
                spaceS--
                p1--;
            } else {
                break;
            }
        }
        while (p2 >= 0) {
            if (t[p2] === '#') {
                spaceT++;
                p2--;
            } else if (spaceT > 0) {
                spaceT--
                p2--;
            } else {
                break;
            }
        }
        if (s[p1] !== t[p2]) return false;
        p1--;
        p2--;
    }
    return true;
};