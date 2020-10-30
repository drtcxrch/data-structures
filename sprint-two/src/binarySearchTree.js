// create new binary search tree
// {left,right,value}
var BinarySearchTree = function (value) {
  var newTree = {};
  newTree.left;
  newTree.right;
  newTree.value = value;
  _.extend(newTree, binaryTreeMethods);

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  ++count;
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};


//1. newTree.value is the target
//2. has children

binaryTreeMethods.contains = function (target) {

  // base case:
  if (target === this.value) {
    return true;
  } else if (target > this.value) {
    return !!this.right && this.right.contains(target);
  } else {
    return !!this.left && this.left.contains(target);
  }

  return false;
};

//
binaryTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  // now handle left and right.
  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * all are linear if everything goes on one side. if random then it's logarithimic.
 */

var binarySearchTree = BinarySearchTree(Math.random());
for (var i = 1; i < 10000; i++) {
  var count = 0;
  binarySearchTree.insert(Math.random());
  if (i % 100 === 0) {
    console.log(`RANDOM. size: ${i} count: ${count} ratio to log : ${count / Math.log(i)}`);
  }
}

binarySearchTree = BinarySearchTree(2);
for (var i = 1; i < 10000; i++) {
  var count = 0;
  binarySearchTree.insert(2);
  if (i % 100 === 0) {
    console.log(`2 ONLY. size: ${i} count: ${count}`);
  }
}

