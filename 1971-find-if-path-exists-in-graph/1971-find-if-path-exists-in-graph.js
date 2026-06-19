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
    
        let visited = new Array(n).fill(false);
        let queue = [source];
        let head = 0;
        visited[source] = true;

        while(head < queue.length ) {
            let vertex = queue[head++];
            let neighbour = graph[vertex]
            for(let neighbours of neighbour) {
                if(!visited[neighbours]) {
                    if(neighbours === destination) return true;
                    visited[neighbours] = true
                    queue.push(neighbours)
                }
            }
        }
    return false

};