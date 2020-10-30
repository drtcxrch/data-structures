var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  var removed = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function() {
    for (var key in storage) {
      var dequeued = storage[key];
      delete storage[key];
      removed += 1;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return count - removed;

  };

  return someInstance;
};
