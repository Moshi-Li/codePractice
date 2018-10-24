var calcEquation = function(equations, values, queries) {
    
    function findRate(target) {
        
        if (table[target[0]] === undefined || table[target[1]] === undefined) {
            return -1
        }
        
        var visited = new Object()
        visited[target[0]] = true;
        
        var arr = [target[0]]
        var rate_arr = [1.0]
        
        while (arr.length > 0) {
            var new_arr = [];
            var new_rate_arr = [];
            
            for (var i = 0; i < arr.length; i++) {
                var rate = rate_arr[i]
                for (var end_dot in table[arr[i]]) {
                    if (end_dot === target[1]) {
                        return rate * table[arr[i]][end_dot]
                    }
                    
                    if (visited[end_dot] != true) {
                        visited[end_dot] != true;
                        
                        new_arr.push(end_dot);
                        new_rate_arr.push(rate * table[arr[i]][end_dot])
                    }
                    
                }
                arr = new_arr;
                rate_arr = new_rate_arr;
            }
        }
        return -1;
    }
    
    var table = new Object();
    for (var i = 0; i < equations.length; i++) {
        
        if (table[equations[i][0]] === undefined) {table[equations[i][0]] = new Object()}
        table[equations[i][0]][equations[i][1]] = values[i]
        if (table[equations[i][1]] === undefined) {table[equations[i][1]] = new Object()}
        table[equations[i][1]][equations[i][0]] = parseFloat(1/values[i])
    }
    
    var result = []
    for (var i = 0; i < queries.length; i++) {
        result.push(findRate(queries[i]))
    }
    return result
    
};