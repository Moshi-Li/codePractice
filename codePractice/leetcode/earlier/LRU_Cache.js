/*
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, 
otherwise return -1.


put(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.


LRUCache cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0
        this.head = {
            key: null,
            value: null,
            next : null,
            pre : null
        }
        this.tail = {
            key: null,
            value: null,
            next : null,
            pre : null
        }
        
        this.tail.pre = this.head;
        this.head.next = this.tail;
        this.data = new Object()
    }
    
    
    put_last(node) {
        
    }
    
    put_first(node) {
        this.head.next.pre = node;
        node.next = this.head.next;
        node.pre = this.head;
        this.head.next = node;
    }
    
    
    delete_node(node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
    
    
    
    put(key, value) {
        if (this.data.hasOwnProperty(key)) {
            var node = data[key];
            
            this.delete(node);
            
            node.value = value;
            
            this.put_first(node);
               
        }
        
        else {
            if (this.length >= this.capacity ) {
                //delete the last node;

                var node = this.tail.pre;
                console.log("=============")
                
                this.delete_node(node);
                

                delete this.data[node.key];

                this.length--;

            }
            
            var node = {
                key: key,
                value: value,
                next : null,
                pre : null
            }
                
            this.put_first(node);  
            this.data[key] = node;
             
            this.length++;
            
        }
    }
    
    get(key) {
        if (!this.data.hasOwnProperty(key)) {
            return -1
        }
        
        var node = this.data[key];
        
        this.delete_node(node);
        this.put_first(node);
        
        return node.value
        
    }
}


var cache = new LRUCache(2)

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);


console.log(cache.data)

