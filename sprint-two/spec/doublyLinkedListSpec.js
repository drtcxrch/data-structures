describe('doubly-linked-list', function() {
  var doublyLinkedList;

  beforeEach(function () {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('a node should have next and previous properties', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail).to.have.property('next');
    expect(doublyLinkedList.tail).to.have.property('previous');
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should add to head when addToHead is called', function() {
    doublyLinkedList.addToTail(4); // 4
    doublyLinkedList.addToTail(5); // 4 5
    doublyLinkedList.addToHead(6); // 6 4 5
    expect(doublyLinkedList.head.value).to.equal(6);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(4);
  });


  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(6); // 6 4 5
    expect(doublyLinkedList.head.value).to.equal(6);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head.value).to.equal(6);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });


  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);

    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should be able to locate a value in lists with more than just a head and a tail', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);

    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false); // list has one item (5)
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(5)).to.equal(false); // case where the list is empty

  });

  // add more tests here to test the functionality of doublyLinkedList
});
