/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [0];
    let visited = Array.from({length : rooms.length},() => false);
    visited[0] = true;
    let head = 0;
    while(head < queue.length) {
        let vertex = queue[head]
        head++
        for(let el of rooms[vertex]) {
            if(!visited[el]) {
                queue.push(el);
                visited[el] = true;
            }
        }
    }

    return visited.includes(false) ? false:true;
};