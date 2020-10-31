var Tree = function (value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newTree = Tree(value, this);
  this.children.push(newTree);
};


//1. newTree.value is the target
//2. has children

treeMethods.contains = function (target) {

  // base case:
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};

treeMethods.removeFromParent = function () {
  //when creating a tree should we pass the parent to the constructor?
  //or add the parent to the constructor?
  //use the filter method to filter this tree out of the parent's children
  var filteredChildren = this.parent.children.filter(e => e !== this);
  this.parent.children = filteredChildren;
  //set the parent to null
  this.parent = null;
};

// recursive
treeMethods.traverse = function (cb) {
  // base case
  if (this.children.length === 0) {
    cb(this);
    return;
  }

  cb(this);
  console.log(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

// tree.children: []
//    5 6  (tree.children: [tree with value 5]), (tree.children: [5,6])
//  /     \ (tree.children[0].children: [])
// 7        8
// tree.children[0].children: [7]
// tree.children[1].children: [8]
// tree.children: [tree with value 6]
/*
 * Complexity: What is the time complexity of the above functions?
 * Push is contant and contains is linear.
 */
