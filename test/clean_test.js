var grunt = require('grunt'),
    fs = require('fs');

exports.clean = {
  short: function(test) {
    'use strict';

    var dirShort = __dirname + '/fixtures/sample_short';

    test.expect(1);

    fs.exists(dirShort, function (exists) {
      test.ok(! exists, 'should remove the short directory using clean');
      fs.mkdir(dirShort);
      test.done();
    });
  },

  long: function(test) {
    'use strict';

    var dirLong = __dirname + '/fixtures/sample_long';

    test.expect(1);

    fs.exists(dirLong, function (exists) {
      test.ok(! exists, 'should remove the long directory using clean');
      test.done();
      fs.mkdir(dirLong);
    });
  }
};
