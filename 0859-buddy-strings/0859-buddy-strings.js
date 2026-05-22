/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {

    if (s.length !== goal.length) return false;

    if (s === goal) {
        let set = new Set(s);
        return set.size < s.length
    }

    let pairs = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            pairs.push(i);
        }
    }

    if (pairs.length === 2) {
        const [index1, index2] = pairs;
        return s[index1] === goal[index2] && s[index2] === goal[index1]
    }

    return false

};