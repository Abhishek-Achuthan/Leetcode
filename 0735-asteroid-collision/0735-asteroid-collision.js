/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let result = [];
    let tracker = -1;

    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            result.push(asteroids[i]);
            tracker += 1;
            continue
        } else {
            if (result[tracker] < 0 || tracker < 0) {
                result.push(asteroids[i]);
                tracker += 1
                continue
            }
            if (Math.abs(asteroids[i]) < result[tracker]) {
                continue;
            } else {
                while (tracker >= 0 && result[tracker] > 0 && Math.abs(asteroids[i]) > result[tracker]) {
                    result.pop();
                    tracker--;
                }
                if (result[tracker] < 0 || tracker < 0) {
                    result.push(asteroids[i]);
                    tracker += 1;
                } else if (Math.abs(asteroids[i]) === result[tracker]) {
                    result.pop();
                    tracker--;
                }
            }
        }
    }
    return result
};