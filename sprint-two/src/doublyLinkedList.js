var DoublyLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var tempTail = Node(value); // tempTail.next === null
    if (this.tail === null) { // Means the linked list is completely empty
      this.tail = tempTail;
      this.head = tempTail;
    } else {
      this.tail.next = tempTail; // second to last node next points to tempTail
      tempTail.previous = this.tail;
      this.tail = tempTail; // now this.tail references last node
    }
  };

  list.addToHead = function (value) {
    var tempHead = Node(value);
    if (this.head === null) {
      this.head = tempHead;
      this.tail = tempHead;
    } else {
      this.head.previous = tempHead;
      tempHead.next = this.head;
      this.head = tempHead;
    }
  };

  list.removeHead = function () {
    if (this.head !== null) {
      var tempHead = this.head;
      this.head = this.head.next;
      return tempHead.value;
    }
  };

  list.removeTail = function () {
    if (this.tail !== null) {
      var tempTail = this.tail;
      this.tail = this.tail.previous;
      return tempTail.value;
    }
  };

  /*
    1. List is empty
    2. List with only 1 item.
    3. List with more than item.
  */
  list.contains = function (target, node) { //passes tests, but not sure if it's actually correct as it doesn't acount for the values that I visually expect to be between head and tail.

    if (node === undefined) { // case where function is called with target only.
      node = this.head;
    }

    // base case: next is null. Return false.
    if (node === null) { // Covers case where list is empty.
      return false;
    } else if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false; // Covers case with only 1 item.
    } else { // Cover case with more than 1 item.
      // recursively look at next.
      return this.contains(target, node.next);
    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addTail & removeHead constant, and contains linear.
 */