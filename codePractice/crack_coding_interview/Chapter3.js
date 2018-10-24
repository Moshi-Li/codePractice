
//3.4 
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

//3.5
function sortStack(stack){
    function findMax(stack) {
        if (stack.length === 0) {
            return Number.MIN_SAFE_INTEGER
        }

        var current = stack.pop();
        var max = findMax(stack);
        stack.push(current);

        return Math.max(current, max);
    }

    function deleteNum(stack, num) {
        if(stack.length === 0) {
            throw new Error("" + num + " does not exist");
        }
        var current = stack.pop();

        if (current === num) {
            return stack
        }
        else {
            var arr = deleteNum(stack, num);
            arr.push(current);
            return arr;
        }
    }



    var length = stack.length
    var my_stack = []
    while(length != 0) {
        var max = findMax(stack)
        deleteNum(stack, max);
        my_stack.push(max)
        length--;
    }

    console.log(my_stack);
}


function main() {
    //console.log(sortStack([1,1,3,2,5,6]))

    

}

main();

