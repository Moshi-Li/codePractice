/*
id = 200
Given a 2d grid map of '1's (land) and '0's (water), 
count the number of islands. 

An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. 

You may assume all four edges of the grid are all surrounded by water.

EX.

Input:
11000
11000
00100
00011

Output: 3

*/


var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    function visit (i, j) {

        if (grid[i][j] != 1) {
            return;
        }

        grid[i][j] = 0;

        if ( (i - 1) >= 0 ) {
            visit(i-1,j)
        }

        if ( (i + 1) < grid.length ) {
            visit(i+1,j)
        }
        
        if ( (j - 1) >= 0 ) {
            visit(i,j-1)
        }

        if ( (j + 1) < grid[i].length ) {
            visit(i,j + 1);
        }

    
        return;

    }

    var count = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j]== 1) {
                count++;
                visit(i, j);
            }
        }
    }

    return count
};



console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]))




