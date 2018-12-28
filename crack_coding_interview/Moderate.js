//16.2
/*
* A class that counts all occurences
* of the words in a book using hashTable;
*
* For each getOccurence(word) call, it takes
* O(1) time to find the word.
*
*/

function candyBorad(N, colors) {
    function isSafe(M, r, c) {
        var vert = false;
        var hori = false;

        if (r-2 < 0) {hori = true}
        else {
            hori = (M[r][c] != M[r-2][c])
        }
        if (c-2 < 0) {vert = true}
        else {
            vert = (M[r][c] != M[r][c-2])
        }
        return vert && hori;

    }

    function place(M, r, c, colors) {
        var ram = Math.floor(Math.random() * colors.length)
        

        M[r][c] = colors[ram];


        while (!isSafe(M,r,c)) {
            ram =  Math.floor(Math.random() * colors.length)  
            M[r][c] = colors[ram] 
        }
    }

    var M = []
    
    for (var i = 0; i < N; i++) {
        M.push([])
        for (var j = 0; j < N; j++) {
            M[i].push(0)

            place(M, i, j, colors)

        }   
    }

    console.log(M)

}

candyBorad(6,['r','b', 'y'])

//16.5


