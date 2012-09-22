var grunt = require('grunt'),
    fs = require('fs');

exports.clean = {
  short: function(test) {
    'use strict';

    test.expect(1);

    fs.exists('tmp/sample_short', function (exists) {
      test.ok(! exists, 'should remove the short directory using clean');
      test.done();
    });
  },

  long: function(test) {
    'use strict';

    test.expect(1);

    fs.exists('tmp/sample_long', function (exists) {
      test.ok(! exists, 'should remove the long directory using clean');
      test.done();
    });
  }
};
