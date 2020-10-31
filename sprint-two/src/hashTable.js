

var HashTable = function () {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) { // unused bucket
    bucket = [[k, v]]; // use array of tuples instead: [k, v]
  } else { // case with already instantiated bucket... key not present
    var tuple = bucket.find(e => e[0] === k); // case with key present
    if (tuple) {
      tuple[1] = v;
    } else {
      bucket.push([k, v]);
    }
  }

  // pair[k] = v;
  this._storage.set(index, bucket);
  this._count++;
  if (this._count / this._limit > .75) {
    // this is where we have to double in size
    this._doubleStorage();
  }
};

HashTable.prototype._doubleStorage = function () {
  this._limit *= 2;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  oldStorage.each((oldBucket, index, collection) => {
    if (oldBucket) {
      for (var i = 0; i < oldBucket.length; i++) {
        this.insert(oldBucket[i][0], oldBucket[i][1]);
      }
    }
  });
};

HashTable.prototype._halveStorage = function () {
  if (this._limit > 1) {
    this._limit /= 2;
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit);
    this._count = 0;
    oldStorage.each((oldBucket, index, collection) => {
      if (oldBucket) {
        for (var i = 0; i < oldBucket.length; i++) {
          this.insert(oldBucket[i][0], oldBucket[i][1]);
        }
      }
    });
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // pair will be an array of tuples e.g. [['Steven,'Seagal'],['Mel','Gibson']]
  if (bucket === undefined) {
    return undefined;
  }

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  // if (k in bucket) {
  //   delete bucket[k];
  // }
  this._count--;
  if (this._count / this._limit < .25) {
    this._halveStorage();
  }
};

var HashTableInstance = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?

 */


