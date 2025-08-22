console.log('script.js');

// function that shows the shortest path to a vertex
function knightMoves (start, end){
    // Graph
    // Define the possible moves a knight can make
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2. -1],
        [-1, 2], [1, 2], [-1, -2], [1, -2]
    ];

    // Bread First Search
    // initialize the queue for bfs
    const queue = [[start]];
    // keeping track of visited nodes
    const visited = new Set();
    // initialize visited with start 
    visited.add(start.toString()); // string for eassy tracking

    // traverse
    while(queue.length > 0){
        // get current path
        const path = queue.shift();

        // get current position
        const current = path[path.length -1]

        // check if knight reached end position
        if(current[0] === end[0] && current[1] === end[1]){
            return path; // path taken from start to end
        }
    }


}