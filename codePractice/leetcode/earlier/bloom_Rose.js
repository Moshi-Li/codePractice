//K #of streak
//M minimum # of roses to be a bloom
//        i-1      i-x     i+x       i+1
//[.......i-x,.....i-1, i, i+1,......i+x]


function lastestDay(A, K, M) {
    var count = 0;
    var day = -1;
    var map = new Object();
    for (var i = 0; i < A.length; i++) {

        if (map[A[i]-1] === undefined && map[A[i]+1] === undefined) {
            //console.log("lonley")
            
            map[A[i]] = A[i];
            if (M === 1) {
                count++;
            }

            if (count === K) {
                day = Math.max(day, i+1);
            }
        }

        else if (map[A[i]-1] != undefined && map[A[i]+1] === undefined) {
            //console.log("left")
            var left = new Object();
            left.right = A[i] - 1;
            left.left = map[A[i] - 1];

            if (left.right - left.left + 1 >= M) {
                count--
            } 

            delete map[left.right];
            map[left.left] = A[i];
            map[A[i]] = left.left;
            
            if (A[i] - map[A[i]] + 1 >= M ) {
                count++
            }

            if (count === K) {
                day = Math.max(day, i+1);
            }
        }


        else if (map[A[i]-1] === undefined && map[A[i]+1] != undefined) {
            //console.log("right")

            var right = new Object();
            right.left = A[i] + 1;
            right.right = map[A[i] + 1];

            if (right.right - right.left + 1 >= M) {
                count--
            } 

            delete map[right.left];
            map[right.right] = A[i];
            map[A[i]] = right.right;
            
            if (map[A[i]] - A[i] + 1 >= M ) {
                count++
            }

            if (count === K) {
                day = Math.max(day, i+1);
            }
        }


        else if (map[A[i]-1] != undefined && map[A[i]+1] != undefined) {

            var left = new Object();
            left.right = A[i] - 1;
            left.left = map[A[i] - 1];

            var right = new Object();
            right.left = A[i] + 1;
            right.right = map[A[i] + 1];

            if (left.right - left.left + 1 >= M) {
                count--
            } 

            if (right.right - right.left + 1 >= M) {
                count--
            }

            map[left.left] = right.right;
            map[right.right] = left.left;

            if (left.left != left.right) {
                delete map[left.right]
            }
            if (right.left != right.right) {
                delete map[right.left]
            }

            if (right.right - left.left + 1 > M ) {
                count++
            }
            if (count === K) {
                day = Math.max(day, i+1);
            }

        }        

       //console.log(map)
       //console.log(count)
    }
    
    
    console.log("r: " + day);
    return day;
}

A = [5,4, 1,2,3,7];
K = 10;
M = 2;

lastestDay(A,K,M)
