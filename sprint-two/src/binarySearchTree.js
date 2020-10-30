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

binaryTreeMethods.insert = function (value, count) {
  if (count) {
    counter++;
  }

  if (value > this.value) {
    if (this.right) {
      this.right.insert(value, count);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value, count);
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
