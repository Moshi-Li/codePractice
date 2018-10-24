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

    print() {
        for (var i = this.stack_2.length-1; i >= 0; i--) {
            console.log(this.stack_2[i])
        }
        for (var i = 0; i < this.stack_1.length; i++) {
            console.log(this.stack_1[i])
        }
    }
}

//lt 340
function lengthOfLongestSubstringKDistinct(s, k) {
    if (k===0) {return 0}
    var table = new Object()

    table.count = 0;
    
    var max = 0;
    
    var Q = new MyQueue()

    var i = 0;
    while (i < s.length) {

        if (table.count <= k) {

            
            max = Math.max(Q.size(), max);
            var temp = s[i]
            Q.enqueue(temp);

            if (table[temp] === undefined || table[temp] === 0 ) {
                table[temp] = 0;
                table.count++;
            }          
            table[temp] += 1;
            i++;
        }



        else if (table.count > k) {

            var temp = Q.dequeue();
            table[temp] = table[temp] - 1;
            if (table[temp] === 0) {
                table.count--;
            }
        }
    }



    if (table.count <= k) {   
        max = Math.max(Q.size(), max);
    }

    return max;
}