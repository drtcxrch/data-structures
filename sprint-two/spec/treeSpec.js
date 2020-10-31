describe('tree', function () {
  var tree;

  beforeEach(function () {
    tree = Tree();
  });

  it('should have methods named "traverse", "addChild", "removeFromParent, and "contains", and properties named "value" and parent', function () {
    expect(tree.addChild).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function () {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function () {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function () {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should correctly detect nested children', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should remove itself from parent when removeFromParent is called', function () {
    // tree.children: []
    //    5 6  (tree.children: [tree with value 5]), (tree.children: [5,6])
    //  /     \ (tree.children[0].children: [])
    // 7        8
    // tree.children[0].children: [7]
    // tree.children[1].children: [8]
    // tree.children: [tree with value 6]
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var firstChild = tree.children[0];
    firstChild.removeFromParent();
    expect(tree.contains(7)).to.equal(false);
    expect(tree.contains(8)).to.equal(true);
    expect(firstChild.contains(7)).to.equal(true);

    expect(tree.children[0].value).to.equal(6);
  });

  it('should return false when a child value isn\'t present', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(9)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "traverse"', function () {
    var array = [];
    var func = function (tree) { array.push(tree.value); };
    tree.value = 5;
    tree.addChild(3);
    tree.addChild(10);
    tree.addChild(1);
    tree.addChild(4);
    tree.addChild(14);
    tree.addChild(3.5);
    tree.addChild(4.5);
    tree.addChild(13);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(func);
    console.log(array);
    expect(array).to.eql([5, 3, 7, 10, 8, 1, 4, 14, 3.5, 4.5, 13]);
  });
});
