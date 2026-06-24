/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [0];
    let visited = Array.from({length : rooms.length},() => false);

    visited[0] = true;
    while(queue.length > 0) {
        let vertex = queue.shift();
        for(let el of rooms[vertex]) {
            if(!visited[el]) {
                queue.push(el);
                visited[el] = true;
            }
        }
    }

    return visited.includes(false) ? false:true;
};