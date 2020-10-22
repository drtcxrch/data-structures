var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.removed = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

Queue.prototype.dequeue = function() {
  for (var key in this.storage) {
    var dequeued = this.storage[key];
    delete this.storage[key];
    this.removed += 1;
    return dequeued;
  }
};

Queue.prototype.size = function() {
  return this.count - this.removed;
};

var QueueInstance = new Queue();