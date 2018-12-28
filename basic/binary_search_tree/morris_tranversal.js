

function sumOfLeaf(root) {
    var sum = 0;
    var cur = root;
    var link = null;

    console.log(root)
    while (cur != null) {
        //console.log(cur)
        if (cur.left === null) {
            if (cur.right === null) {sum += cur.value;}
            cur = cur.right; 
        }
        else {
            link = cur.left;

            while (link.right != null && link.right != cur) {
                link = link.right;
            }

            if (link.right === null) {
                link.right = cur;
                cur = cur.left;
            }

            else {
                cur = cur.right;
                link.right = null;
                
                if (link.left === null) {
                    sum += link.value;
                }

            }
        }
    }
    return sum;
}

var root = {
    value: 0,
    left : null,
    right: null
}

var node_1 = {
    value: 1,
    left : null,
    right: null
}

var node_2 = {
    value: 2,
    left : null,
    right: null
}

var node_3 = {
    value: 3,
    left : null,
    right: null
}

var node_4 = {
    value: 4,
    left : null,
    right: null
}

var node_5 = {
    value: 5,
    left : null,
    right: null
}


var node_6 = {
    value: 6,
    left : null,
    right: null
}



root.left = node_1;
root.right = node_2;

node_1.left = node_3;
node_1.right = node_4; 

node_2.left = node_5;
node_2.right = node_6; 

console.log(sumOfLeaf(root));


function find_median(root) {
    function getL(node) {
        if (node === null) {
            return 0;
        }
        return getL(node.left) + getL(node.right) + 1;
    }



    function find_Nth_node(root, n_th) {
        /*
        var count = -1;
        var node = root;

        while (node != null) {
            if (node.left === null) {
                count++;
                if (count === n_th) {
                    return node.val;
                }
                node = node.right
            }
            else {
                var pre = node.left;
                while (pre.right != null && pre.right != node) {
                    pre = pre.right;
                }

                if (pre.right === null) {
                    pre.right = node;
                    node = node.left;
                }
                else {
                    pre.right = null;
                    count++;
                    if (count === n_th) {
                        return node.val;
                    }
                    node = node.right
                }
            }
        }
        return -1;
        */
        
        
        var count = -1;
        var node = root;
        while (node != null) {
            if (node.left === null) {
                count++;
                if (count === n_th) {
                    return node.val;
                }
                node = node.right;
            }
            else {
                var right_most = node.left;

                while (right_most.right != null && right_most.right != node) {
                    right_most = right_most.right;
                }

                if (right_most.right === null) {
                    right_most.right = node;
                    node = node.left;
                }
                else {
                    right_most.right = null;
                    count++;
                    if (count === n_th) {
                        return node.val;
                    }
                    node = node.right;
                }
            }
        }
        return -1;
    } 

    function visit(node, arr) {
        if (node === null) {
            return;
        }

        visit(node.left,arr);
        count++;
        arr.push([node.val, count]);
        visit(node.right,arr);
        return;
    }

    var length = getL(root);

    console.log(find_Nth_node(root, 2));

    //var array = [];
    //var count = 0;
    //visit(root, array);
    //console.log(array);
}


