

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = this._storage.get(index);
  if (pair === undefined) {
    pair = {};
  }

  pair[k] = v;
  this._storage.set(index, pair);
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = this._storage.get(index);
  return pair[k];
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = this._storage.get(index);
  if (k in pair) {
    delete pair[k];
  }

};

var HashTableInstance = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
    
 */


