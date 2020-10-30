var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;


  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  if (this.count >= 1) {
    this.count -= 1;
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  }
};

stackMethods.size = function() {
  return this.count;
};
