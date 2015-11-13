'use strict';

var grunt = require('grunt');
var dircompare = require('dir-compare');

exports.clean = {
  shortPathTest: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/sample_short');
    test.equal(expected, false, 'should remove the short directory using clean');

    test.done();
  },
  longPathTest: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/sample_long');
    test.equal(expected, false, 'should remove the long directory using clean');

    test.done();
  },
  exclude: function (test) {
    var res = dircompare.compareSync('test/expected/end_01', 'tmp/end_01');
    test.equal(true, res.same, 'should match exclusions');
    test.done();
  },
  excludeSub: function (test) {
    var res = dircompare.compareSync('test/expected/end_02', 'tmp/end_02');
    test.equal(true, res.same, 'should match exclusions for sub');
    test.done();
  }
};
