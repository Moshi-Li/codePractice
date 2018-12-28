/*
id = 463
*/


var islandPerimeter = function(grid) {
    var total = 0;
    
    for (var i = 0; i < grid.length; i++) {

        for (var j = 0; j < grid[i].length; j++) {
           if (grid[i][j] === 1) {
               //top
                if (i === 0) {
                    total++;
                }   
                else { 
                    if (grid[i-1][j] === 0) {
                        total ++;
                    }
                }

                //down
                if (i === (grid.length - 1)) {
                    total++;
                }   
                else { 
                    if (grid[i + 1][j] === 0) {
                        total ++;
                    }
                }

                //left
                if (j === 0) {
                    total++;
                }   
                else { 
                    if (grid[i][j-1] === 0) {
                        total ++;
                    }
                }

                //right
                if (j === (grid[i].length-1)) {
                    total++;
                }
                else { 
                    if (grid[i][j+1] === 0) {
                        total ++;
                    }
                }
           }   
        }
    }
    return total
}

console.log(islandPerimeter([[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]))