/*jshint node: true */
'use strict';

var Node = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.counter = 1;
};

Node.prototype.show = function() {
  return this.data;
};

module.exports = Node;
