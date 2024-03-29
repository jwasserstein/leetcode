/*
Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 

Follow-up: Can you implement the stack such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer. You can use more than two queues.
*/

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queues = [
        [],
        []
    ];
    this.currQueue = 0;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queues[this.currQueue].push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.queues[this.currQueue].length > 1){
        this.queues[1-this.currQueue].push(this.queues[this.currQueue].shift());
    }
    const val = this.queues[this.currQueue].shift();
    this.currQueue = 1 - this.currQueue;
    return val;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queues[this.currQueue][this.queues[this.currQueue].length-1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queues[this.currQueue].length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


var MyStack = function() {
    this.data = [[],[]];
    this.ptr = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.data[this.ptr].push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let val;
    const targetQueue = Number(!this.ptr);
    while (this.data[this.ptr].length > 1) {
        this.data[targetQueue].push(this.data[this.ptr].shift());
    }
    val = this.data[this.ptr][0];
    this.data[this.ptr] = [];
    this.ptr = targetQueue;
    return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let val;
    const targetQueue = Number(!this.ptr);
    while (this.data[this.ptr].length > 1) {
        this.data[targetQueue].push(this.data[this.ptr].shift());
    }
    val = this.data[this.ptr][0];
    this.data[targetQueue].push(this.data[this.ptr].shift());
    this.ptr = targetQueue;
    return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.data[this.ptr].length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for (let i = 0; i < this.queue.length - 1; i++) {
        const val = this.queue.shift();
        this.queue.push(val);
    }
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    for (let i = 0; i < this.queue.length - 1; i++) {
        const val = this.queue.shift();
        this.queue.push(val);
    }
    const val = this.queue.shift();
    this.queue.push(val);
    return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


var MyStack = function() {
  this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.data.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  for (let i = 0; i < this.data.length-1; i++) {
    const val = this.data.pop();
    this.data.unshift(val);
  }
  return this.data.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  for (let i = 0; i < this.data.length-1; i++) {
    const val = this.data.pop();
    this.data.unshift(val);
  }
  const val = this.data.pop();
  this.data.unshift(val);
  return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.data.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
