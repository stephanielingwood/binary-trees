/*jshint node: true */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var BST = require('../lib/bst.js');
var Node = require('../lib/bst_node.js');
var arrayMaker = require("../lib/string_to_array.js");


describe('Binary Tree Methods', function() {
  var Tree = new BST();
  Tree.insert(35);
  Tree.insert(4);
  Tree.insert(67);
  Tree.insert(93);
  Tree.insert(14);
  Tree.insert(19);
  Tree.insert(83);
  Tree.insert(33);
  Tree.insert(41);
  Tree.insert(12);
  Tree.insert(29);

  it('finds the number of nodes', function(done) {
    expect(Tree.size()).to.eql(11);
    done();
  });

  it('finds the number of edges', function(done) {
    expect(Tree.edges()).to.eql(10);
    done();
  });

  it('finds the minimum value', function(done) {
    expect(Tree.getMin()).to.eql(4);
    done();
  });

  it('finds the maximum value', function(done) {
    expect(Tree.getMax()).to.eql(93);
    done();
  });
});

describe('Count instances of a word in text', function() {
  var macbeth = "Tomorrow and tomorrow and tomorrow creeps in this petty pace from day to day to the last syllable of recorded time All our yesterdays have lighted fools the way to dusty death Out out brief candle Life is but a walking shadow a poor player who struts and frets his hour upon the stage and then is heard no more It is a tale told by an idiot full of sound and fury signifying nothing";
  var array = arrayMaker(macbeth);
  var Count = new BST();
  Count = Count.arrayToTree(array);
  it('returns the frequency of words in a string', function(done) {
    expect(Count.returnCounts(Count.root)).to.eql('All: 1, It: 1, Life: 1, Out: 1, Tomorrow: 1, a: 3, an: 1, and: 5, brief: 1, but: 1, by: 1, candle: 1, creeps: 1, day: 2, death: 1, dusty: 1, fools: 1, frets: 1, from: 1, full: 1, fury: 1, have: 1, heard: 1, his: 1, hour: 1, idiot: 1, in: 1, is: 3, last: 1, lighted: 1, more: 1, no: 1, nothing: 1, of: 2, our: 1, out: 1, pace: 1, petty: 1, player: 1, poor: 1, recorded: 1, shadow: 1, signifying: 1, sound: 1, stage: 1, struts: 1, syllable: 1, tale: 1, the: 3, then: 1, this: 1, time: 1, to: 3, told: 1, tomorrow: 2, upon: 1, walking: 1, way: 1, who: 1, yesterdays: 1, ');
      done();
  });
});
