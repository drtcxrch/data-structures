describe('binarySearchTree', function () {
  var binarySearchTree;

  beforeEach(function () {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function () {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function () {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function () {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  /*
            5
          /   \
        3       10
      /   \        \
     1     4         14
         /   \     /
       3.5   4.5 13
   */ // 5, 3, 1, 4, 3.5, 4.5, 10, 14, 13

  it('should execute a callback on every value in a tree using "depthFirstLog" and do it in depth first order', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(14);
    binarySearchTree.insert(3.5);
    binarySearchTree.insert(4.5);
    binarySearchTree.insert(13);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 3, 1, 4, 3.5, 4.5, 10, 14, 13]);
  });

  //   it('should return closest number among a million in a list', function() {
  //     var millionNums = [];
  //     for (var i = 0; i < 1000000; i++) {
  //       millionNums.push(1000 * i);
  //     }

  //     var divisor = 2;
  //     var multiplier = 1;
  //     for (var i = 0; i < 1000000; i++) { // i = 0, d = 2, mn[500000]. i = 1, d = 4, mn[250000], i = 2, d = 4, mn[750000], i = 3 3/8, mn[125000] 4 5/8, 5 7/8, 6,
  //       if (multiplier > divisor) {
  //         divisor *= 2;
  //         multiplier = 1;
  //       }

  //       window.counter = 0;
  //       binarySearchTree.insert(millionNums[Math.floor(millionNums.length * multiplier / divisor)], true);
  //       console.log(`i: ${i}, multiplier: ${multiplier} divisor: ${divisor} index: ${millionNums.length * multiplier / divisor} counter: ${counter}`);
  //       console.log('inserting: ' + millionNums[Math.floor(millionNums.length * multiplier / divisor)]);

  //       multiplier += 2;
  //     }

  //   });
});
