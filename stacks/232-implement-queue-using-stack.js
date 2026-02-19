//TC - O(N) for push as we are using two stacks and O(1) for other operations.
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }

  this.stack1.push(x);

  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stack1.length) return;

  return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
