class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.removed = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count += 1;
  }

  dequeue() {
    for (var key in this.storage) {
      var dequeueed = this.storage[key];
      this.removed += 1;
      delete this.storage[key];
      return dequeueed;
    }
  }

  size() {
    return this.count - this.removed;
  }

}

var QueueInstance = new Queue();
