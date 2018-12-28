/*
id = 42
*/



var trap = function(height) {
    
    function get_right_wall(h, index) {
        index++
        while (index < height.length && h > height[index]) {
            index++
        }


        if (index === height.length) {
            return null;
        }

        return index;
    }
    
    
    
    function get_right_water(h, index) {
        var c = 0;
        
        for (var i = 1; i < h+1; i++ ) {
            var right = get_right_wall(i,index)
            if (right != null) {
                c = c + (right - index - 1)
            }
        }

        return c;
        
    }
    



    var count = 0;
    for (var i = 0; i < height.length; i++) {
        if (height[i] > 0) {
            count = count + get_right_water(height[i], i);
        }
    }
    return count;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))