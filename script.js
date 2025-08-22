console.log('script.js');

// function that shows the shortest path to a vertex
function knightMoves (start, end){
    // Graph
    // Define the possible moves a knight can make
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
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

        // explore all posible knight moves
        for(const move of knightMoves){
            const nextX = current[0] + move[0];
            const nextY = current[1] + move[1];
            const nextPosition = [nextX, nextY];

            // verify next move is not out of bounds and not visited
            if(isValidPosition(nextPosition) && !visited.has(nextPosition.toString())){
                // add to next position to visited
                visited.add(nextPosition.toString());
                queue.push([...path, nextPosition]);
            }
        }
        
    }

    return "Output Error"

}

// add a helper function for position verification
        function isValidPosition (position){
            // destructure the array
            const [x, y] = position;
            // ensures the rules of the board are followed
            return x >= 0 && x < 8 && y >= 0 && y < 8;
        }