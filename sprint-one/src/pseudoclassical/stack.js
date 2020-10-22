var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

Stack.prototype.pop = function() {
  if (this.count >= 1) {
    this.count -= 1;
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

var SomeStack = new Stack();
