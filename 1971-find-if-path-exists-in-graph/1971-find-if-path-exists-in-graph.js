/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source === destination) return true
    let graph = Array.from({length:n},() => []);

    
    for(let i=0; i<edges.length ; i++){
        let [v1,v2] = edges[i];
        graph[v1].push(v2);
        graph[v2].push(v1);
    };
    
    let visited = new Set();
    function tracePath(source) {
        let queue = [source];
        visited.add(source);

        while(queue.length > 0) {
            let vertex = queue.shift();
            let neighbour = graph[vertex]
            for(let neighbours of neighbour) {
                if(!visited.has(neighbours)) {
                    queue.push(neighbours)
                    visited.add(neighbours)
                }
            }
        }
    }
    tracePath(source);
    return visited.has(destination)

};