/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < s1.length; i++) {
        map1.set(s1[i], (map1.get(s1[i]) || 0) + 1)
    }

    for (let i = 0; i < s1.length; i++) {
        map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)
    }

    function isEqual(map1, map2) {
        if (map2.size !== map1.size) return false;

        for (let [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
    let k = s1.length;

    for (let i = k; i < s2.length; i++) {
        if (isEqual(map1, map2) === true) {
            return true;
        } else {
            let leftChar = s2[i - k];
            map2.set(leftChar, map2.get(leftChar) - 1);

            if (map2.get(leftChar) === 0) {
                map2.delete(leftChar);
            }
            let rightChar = s2[i];
            map2.set(rightChar, (map2.get(rightChar) || 0) + 1);
        }
    }
    return isEqual(map1, map2);
};