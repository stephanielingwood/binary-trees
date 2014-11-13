/*jshint node: true */
'use strict';

var Node = require('./bst_node.js');

var BST = function() {
  this.root = null;
};

BST.prototype.find = function(data) {
  var current = this.root;

  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    }
    else {
      current = current.right;
    }
  }

    return current;
};

BST.prototype.insert = function(data) {
  var node = new Node(data, null, null);
  if (this.root === null){
    this.root = node;
  }

  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
          break;
        }
      }
      else {
        current = current.right;
        if (current === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.show() + ' ');
    this.inOrder(node.right);
  }
};

BST.prototype.traverse = function(callback) {
  function inOrder2(node) {
    if (node !== null) {
      inOrder2(node.left);
      callback.call(this, node);
      inOrder2(node.right);
    }
  }
  inOrder2(this.root);
};

BST.prototype.preOrder = function(node) {
  if (node !== null) {
    console.log(node.show + ' ');
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};

BST.prototype.postOrder = function(node) {
  if (node !== null) {
    this.preOrder(node.left);
    this.preOrder(node.right);
    console.log(node.show + ' ');
  }
};

BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

BST.prototype.removeNode = function(node, data) {
  if (node === null) {
    return null;
  }

  if (data === node.data) {
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }
    else {
      var tempNode = this.getMin(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
  }

  else if (data < node.data) {
    node.left = this.removeNode(node.left, data);
    return node;
  }

  else {
    node.right = this.removeNode(node.right, data);
    return node;
  }
};

BST.prototype.remove = function(data) {
  var root = this.removeNode(this.root, data);
};

BST.prototype.numNodes = function() {
  var nodeCount = 0;
  BST.traverse(function() {
    nodeCount++;
  });
  return nodeCount;
};

BST.prototype.numEdges = function() {
  var nodeCount = 0;
  BST.traverse(function() {
    nodeCount++;
  });
  return (nodeCount - 1);
};

BST.prototype.size = function(){
  var length = 0;
  this.traverse(function(node) {
    length++;
  });
  console.log(length);
  return length;
};

BST.prototype.edges = function(){
  var edges = this.size() - 1;
  console.log(edges);
  return edges;
};

BST.prototype.update = function(data) {
  var n = this.find(data);
  n.counter++;
  return n;
};

BST.prototype.arrayToTree = function(arr) {
  var bst = new BST();
  for (var i = 0; i < arr.length; i++) {
    var temp = bst.find(arr[i]);
    if (temp === null) {
      bst.insert(arr[i]);
    }
    else {
      bst.update(arr[i]);
    }
  }
  console.log(bst);
  return bst;
};

BST.prototype.returnCounts = function(node) {
  var testString = '';
  this.traverse(function(node) {
    testString+=(node.data + ": " + node.counter + ", ");
  });
  return testString;
};

module.exports = BST;
