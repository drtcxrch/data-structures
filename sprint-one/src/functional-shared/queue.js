var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.removed = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count += 1;
};

queueMethods.dequeue = function () {
  for (var key in this.storage) {
    var dequeued = this.storage[key];
    delete this.storage[key];
    this.removed += 1;
    return dequeued;
  }
};

queueMethods.size = function () {
  return this.count - this.removed;
};






