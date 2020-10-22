var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.pop = function() {
    if (count >= 1) {
      count -= 1;
      var popped = storage[count];
      delete storage[count];
      return popped;
    }

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
