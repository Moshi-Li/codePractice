

var gameOfLife = function(board) {
    function deal(map, i, j, status) {
        
        var count = 0;
        var len_row = board[0].length;
        var len_col = board.length
    
        //top
        if (i-1 > -1 && board[i-1][j] === 1) {count++}
        //right
        if (j+1 < len_row && board[i][j+1] === 1) {count++}
        //button
        if (i+1 < len_col && board[i+1][j] === 1) {count++}
        //left
        if (j-1 > -1 && board[i][j-1] === 1) {count++}
        
        //top right
        if (j+1 < len_row && i-1 > -1 && board[i-1][j+1] === 1) {count++}
        //top left
        if (j-1 > -1 && i-1 > -1 && board[i-1][j-1] === 1) {count++}  
        
        //button right
        if (i+1 < len_col && j+1 < len_row && board[i+1][j+1] === 1) {count++}
        //button left
        if (i+1 < len_col && j-1 > -1 && board[i+1][j-1] === 1) {count++}
        
        console.log("i: " + i + " j:" + j)
        console.log(count);

        if (status === 1 ) {
            if (count > 3  || count < 2) {
                map[i].push(0)
            }
            else {
               map[i].push(1) 
            }
        }
        
        else {
            if (count === 3) {
                map[i].push(1)
            }
            else {
                map[i].push(0)
            }
            
        }
        
    }
    
    
    var map = []
    for (var i = 0; i < board.length; i ++) {
        map.push([])
        for (var j = 0; j < board[i].length; j++) {
            
            deal(map,i,j, board[i][j])
        }
    }
    return map
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))