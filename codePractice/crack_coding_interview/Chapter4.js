class MyQueue {
    constructor() {
        this.stack_1 = [];
        this.stack_2 = [];
    }

    enqueue(value) {
        this.stack_1.push(value);
    }
    dequeue() {
        if (this.stack_2.length === 0) {
            this.stack_2 = this.stack_1.reverse();
            this.stack_1 = [];
        }
        return this.stack_2.pop()
    }
    
    front() {
        if (this.stack_2.length === 0) {
            this.stack_2 = this.stack_1.reverse();
            this.stack_1 = [];
        }
        var value = this.stack_2.pop();
        this.stack_2.push(value)
        return value;
    }

    size() {
        return this.stack_1.length + this.stack_2.length;
    }
}

//4.1
function hasRoute(p1, p2, graph) {

    function hasR(p1, p2, graph) {
        var Q = new MyQueue;
        var table  = new Object();

        Q.enqueue(p1);
        table[p1] = true;
        
        while (Q.size() > 0) {
            var p = Q.dequeue();
            
            for (var i = 0; i < graph[p].length; i++) {
                if (graph[p][i] == p2) {
                    return true;
                }
                
                if (table[graph[p][i]] != true) {
                    Q.enqueue(graph[p][i]);
                    table[graph[p][i]] = true;
                }
            }
        }
        return false;
    }

    if(graph[p1] === undefined || graph[p2] === undefined) {
        throw new Error('Invalid input')
    }

    return hasR(p1,p2,graph) || hasR(p2,p1,graph);
}

function hasRoute_test() {
    var graph = {
        1 : [2],
        2 : [3, 4, 6],
        3 : [],
        4 : [5],
        5 : [],
        6 : [5]
    }

    console.log(hasRoute(5,3, graph));
}

//1.2 
function minimalTree(array) {

    function getMid(array) {
        return Math.floor(array.length/2);
    }

    function putNode(value, root) {
        //console.log(value);
        if (root.value === null) {
            root.value = value;
            return root;
        }
        var temp = root;
        var pre = null;
        while (temp != null) {
            pre = temp;
            if (value >= temp.value) {
                temp = temp.right;

            }
            else {
                temp = temp.left;

            }
        }

        if (pre.value > value) {
            pre.left = {value: value, left : null, right: null};
        }
        else {
            pre.right = {value: value, left : null, right: null};
        }

        //console.log(root);
        return root;
    }

    function printT(node) {
        if (node != null) {
            console.log("Node: " + node.value);
            console.log('Left: ' + printT(node.left));
            console.log('Right: ' + printT(node.right))
        }
    }

    if (array.length === 0) {
        return null;
    }

    var arr = [array];
    var root = {
        value : null,
        left: null,
        right: null
    }

    while (arr.length > 0) {
        var arr_2 = []
        for (var i = 0; i < arr.length; i++) {
            //find mid and put;

            var mid = getMid(arr[i]);
            //console.log(arr[i][mid])            
            root = putNode(arr[i][mid], root);

            //split and push
            
            if (arr[i].length > 2) {
                var l = arr[i].slice(0 , mid);
                var r = arr[i].slice(mid+1)
                arr_2.push(l);
                arr_2.push(r);

            }
            if (arr[i].length === 2) {

                arr_2.push([arr[i][0]]);
            }
        }
        arr = arr_2;
    }
    
    console.log(root);
    return root;
    
}

function minimalTree_test() {
    minimalTree([2,4,6,8,10,12,12]);
}

//1.3
function listOfDepth(root) {

    function printList(list) {
        console.log(list);
        for (var i = 0; i <  list.length; i++) {
            console.log('Level ' + i + " :" )
            var temp = list[i].next;
            while (temp != null) {
                console.log(temp.value);
                temp = temp.next;
            }
        }
    }
    var arr = [root];
    var list = []
    while (arr.length != 0) {
        var new_arr = []
        var head = {value : null, next : null};
        var cur = head;
        for (var i = 0; i < arr.length; i++) {
            cur.next = arr[i];
            cur = cur.next;

            if (arr[i].left != null) {
                new_arr.push(arr[i].left)
            }
            if (arr[i].right != null) {
                new_arr.push(arr[i].right)
            }
        }
        list.push(head);
        arr = new_arr;
    }
    
    printList(list);
}

//1.4

function checkBalanced(root) {
    function getHeight(node) {
        if (node === null) {
            return 0;
        }
        var leftH = getHeight(node.left)
        var rightH = getHeight(node.right)
        return Math.max(leftH, rightH) + 1;
    }

    var diff = getHeight(root.left) - getHeight(root.right);
    diff = Math.abs(diff);

    if (diff > 1) {
        return false;
    }
    else {
        return true;
    }
}

function checkBalanced_test() {
    var root = {
        value : 2,
        left  : null,
        right : null
    }
    var node_1 = {
        value : 3,
        left : null,
        right : null
    } 
    var node_2 = {
        value : 3,
        left : null,
        right : null
    } 
    var node_3 = {
        value : 3,
        left : null,
        right : null
    } 
    var node_4 = {
        value : 3,
        left : null,
        right : null
    } 

    root.left = node_1;
    root.right = node_4;
    node_4.right = node_3
    node_1.left = node_2;

    console.log(checkBalanced(root));
}
//1.5

function isBTS(root) {
    function check(node) {
        if (node.left != null && node.right != null) {
            if (node.left.value >= node.value) {return false;}
            if (node.right.value < node.value ){return false;}
        }
        return true;
    }

    function putChiild(node, Q) {
        if (node.left != null) {Q.enqueue(node.left)};
        if (node.right != null) {Q.enqueue(node.right)}
    }

    //Start
    //Check input
    if (root === null) {
        return false;
    }
    /***********   
    Loop through nodes in BTS to 
    check the realation among node,
    node.left, node.right;
    Using BFS
    ************/
    var Q = new MyQueue();
    Q.enqueue(root);
    while (Q.size() > 0) {
        var node = Q.dequeue();
        if (check(node) != true) {
            return false;
        }
        putChiild(node , Q)
    }
    return true;
}

function isBTS_test() {
    var root = {
        value : 3,
        left  : null,
        right : null
    }
    var node_1 = {
        value : 2,
        left : null,
        right : null
    } 
    var node_2 = {
        value : 3,
        left : null,
        right : null
    } 
    root.left = node_1;
    root.right = node_2;
    console.log(isBTS(root)) 
}
//4.7
function buildOrder(projects, dependencies) {
    function check(list, request) {
        for (var i = 0; i < request.length; i++) {
            if (list.includes(request[i]) == false) {
                return false;
            }
        }
        return true;
    }

    var table = new Object();
    for (var i = 0; i < projects.length; i++) {
        table[projects[i]] = [];
    }
   
    for (var i = 0; i < dependencies.length; i++) {
        
        if (table[dependencies[i][1]] === undefined) {
            throw new Error("invalid input")
        }
        if (table[dependencies[i][0]] === undefined) {
            throw new Error("invalid input");
        }
        table[dependencies[i][1]].push(dependencies[i][0]);
    }


    var list = [];
    for (var i in table) {
        if (table[i].length === 0) {list.push(i); delete table[i];};
    }

    while (list.length != projects.length) {
        for (var i in table) {
            if ( check(list,table[i])) {
                list.push(i);
                delete table[i];
            }
        }
    }
    return list
}

function buildOrder_test() {
    var projects = ['a', 'b', 'c', 'd', 'e','f' ];
    var dependencies = [['a','d'], ['f','b'], ['b','d'], ['f','a'],['d','c'] ]
    console.log(buildOrder(projects,dependencies)); 
}

//4.9
function btsSequence(root) {
    function instertN_at_index(array, index, num) {
        if (index >= array.length ) {
            throw new Error("invalid index");
        }
        var arr = [];
        for (var i = 0; i < array.length; i++) {
            if (i === index) {
                arr.push(num)
            }
            arr.push(array[i]);
        }
        return arr;
    }

    function getCombination(input) {

        if (input.length === 1) {
            return [input];
        }

        var last = input[input.length-1]

        var combination = getCombination(input.slice(0,input.length-1));
        
        var array = [];
        for (var i = 0; i < combination.length; i++) {
            for(var j = 0; j < combination[i].length; j++) {
                array.push(instertN_at_index(combination[i], j, last));
            }
            array.push(combination[i]);
            array[array.length-1].push(last);
        }

        return array;
    }

    function updateResult(left, right) {
        if (right.length === 0) {
            return left;
        }

        var combination = getCombination(right);
        var array = [];
        for (var m = 0; m < left.length; m++) {
            for (var k = 0; k < combination.length; k++) {

                array.push(left[m].concat(combination[k]))
            }
        }
        return array;
    }

    if (root === null) {
        return [];
    }

    var result = [[root.value]]

    var array = [root];
    while (array.length > 0) {

        var new_array = [];
        var nums = [];
        
        for (var i = 0; i < array.length; i++) {
            var node = array[i];
            if (node.left != null) {new_array.push(node.left); nums.push(node.left.value)}
            if (node.right != null) {new_array.push(node.right); nums.push(node.right.value)}
        }

        result = updateResult(result, nums);
        array = new_array;
        
    }
    console.log(result)
}

function btsSequence_test() {
    var root = minimalTree([1,2,3,4,5,6,7]);

    btsSequence(root);
}

//4.10;
// Is root2 a subtree of root1;
function checkSubtree(root1, root2) {
    function isIdentical(node1, node2) {
        //console.log('---------')
        //console.log(node1);
        //console.log(node2);

        if (node1 === null && node2 === null) {return true;}
        if (node1 === null && node2 != null) {return false;}
        if (node2 === null && node1 != null) {return false;}

        if (node1.value != node2.value) {return false};


        var cur = (node1.value === node2.value);
        var l = isIdentical(node1.left, node2.left)
        var r = isIdentical(node1.right, node2.right)

        return (cur&&r&&l)
    }

    if (root1 === null || root2 === null) {return false}
    var Q = new MyQueue();
    Q.enqueue(root1)

    while (Q.size() > 0) {

        var node = Q.dequeue();
        //console.log('==============')
        //console.log(node);
        
        if (isIdentical(node, root2)) {return true;} 
        if (node.left != null) {Q.enqueue(node.left);}
        if (node.right != null) {Q.enqueue(node.right);}
    }
    return false;

}

function checkSubtree_test() {
    var root_1 = minimalTree([2,3]);
    var root_2 = minimalTree([2,3]);



    //console.log(root_1)
    //console.log(root_2)

    console.log(checkSubtree(root_1,root_2));
}

//4.11
/***** 
 * #1 Save all nodes to an array and get ramdom node from array
 * T: O(n) for first getRam(), O(1) for other getRam();
 * 
 * #2 Loop all nodes to get total number of nodes.
 *     get a ramdom number bettwen 0 to length.
 *     Loop the all nodes while keeping count of visited nodes.
 *      return node when count == random number
 *        
*****/
function getRamdomNode(head) {

}

//4.12

function pathWithSum(head, sum) {
    function getCopy(target) {
        var v = target[0];
        var arr = [];
        for (var k = 0; k < target[1].length; k++) {
            arr.push(target[1][k]);
        } 
        return [v, arr];
    }
    function getCombination(node) {
        if (node.left === null && node.right === null) {return [[node.value,[0]]]}
        var arr = [];

        if (node.left != null) {
            var lc = getCombination(node.left);
            for (var i = 0; i < lc.length; i++) {

                var pos = lc[i][1]
                if (pos[pos.length - 1] === 0) {
                    arr.push(getCopy(lc[i]))
                    //update value
                    arr[arr.length-1][0] = arr[arr.length-1][0] + node.value;
                    //update position
                    var p = arr[arr.length-1][1]
                    p[p.length - 1] = 1;
                    p.push(0);


                }
            }
            arr = arr.concat(lc);
        }

        if (node.right != null) {

            var rc = getCombination(node.right);

            for (var j = 0; j < rc.length; j++) {

                var pos = rc[j][1]
                if (pos[pos.length - 1] === 0) {
                    arr.push(getCopy(rc[j]))
                    //update value
                    arr[arr.length-1][0] = arr[arr.length-1][0] + node.value;

                    //update position
                    var p = arr[arr.length-1][1]
                    p[p.length - 1] = 1;
                    p.push(0);
                }
            }
            arr = arr.concat(rc);
        }

        arr.push([node.value, [0]]);
        return arr;
    }

    var com = getCombination(head).sort(function(a,b){return a[1].length - b[1].length})
    return com;
}

function main() {
    var root_1 = minimalTree([3,2,1]);
    console.log(pathWithSum(root_1, 2));
}

main()