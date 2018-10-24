/*
        2
    1       4
      1.5    3   5
*/
var root = Object();
root.val = 2;
root.left = 
{
    val : 1,
    left: null,
    right: {
        val: 1.5,
        left: null,
        right: null
    }
}

root.right = 
{
    val : 4,
    left: {
        val : 3,
        left: null,
        right: null
    },
    right: {
        val : 5,
        left: null,
        right: null
    }
}


class BSTIterator {
    constructor(root) {
        this.stack = [];        
        this.all_left(root);
    }

    hasNext() {
        if (this.stack.length > 0) {
            return true;
        }
        else {
            return false;
        }
        
        
    }

    next() {
        var node = this.stack.pop()

        if (node.right != null) {
            this.all_left(node.right)
        }
        console.log(node.val)
        console.log("=====")
        return node.val;

    }

    all_left(node) {
        while (node != null) {
            this.stack.push(node)
            node = node.left;
        }
    }


}

var i = new BSTIterator(root), a = [];

var a = [];

while (i.hasNext()) {
     a.push(i.next())
}

console.log(a)






