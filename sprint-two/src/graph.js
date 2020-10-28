

// Instantiate a new graph
var Graph = function () {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var otherNode in this.nodes) {
    this.removeEdge(otherNode, node);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.nodes[fromNode] && this.nodes[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (fromNode in this.nodes && toNode in this.nodes) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (fromNode in this.nodes && toNode in this.nodes) {
    this.nodes[fromNode] = this.nodes[fromNode].filter(e => e !== toNode);
    this.nodes[toNode] = this.nodes[toNode].filter(e => e !== fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

var GraphInstance = new Graph(); // nodes: {}
GraphInstance.addNode(1); // nodes: {1:[]}
GraphInstance.addNode(2); // nodes: {1:[],2:[]}
GraphInstance.addEdge(1, 2); // nodes: {1:[2],2:[1]}
GraphInstance.removeNode(1); // nodes: {2:[]}

/*
 * Complexity: What is the time complexity of the above functions?
 */


