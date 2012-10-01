'use strict';

var grunt = require('grunt');

exports.clean = {
  short: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/sample_short');
    test.ok(!expected, 'should remove the short directory using clean');

    test.done();
  },

  long: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/sample_long');
    test.ok(!expected, 'should remove the long directory using clean');

    test.done();
  }
};
