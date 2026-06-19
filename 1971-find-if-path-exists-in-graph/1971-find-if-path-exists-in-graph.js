/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    if(source === destination) return true
    
    for(let el of edges){
        let [v1,v2] = el;

       if(!graph.has(v1)){
         graph.set(v1,[]);
       }
       graph.get(v1).push(v2);
       if(!graph.has(v2)) {
        graph.set(v2,[])
       }
       graph.get(v2).push(v1)
    };
    
    let visited = new Set();
    function tracePath(source) {
        let queue = [source];
        visited.add(source);

        while(queue.length > 0) {
            let vertex = queue.shift();
            let neighbour = graph.get(vertex);
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