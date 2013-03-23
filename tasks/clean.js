/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('clean', 'Clean files and folders.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      force: false
    }), quiet, count;

    // Initialize variables
    count = 0;
    quiet = !!this.data.quiet;

    grunt.verbose.writeflags(options, 'Options');

    // Clean specified files / dirs.
    this.filesSrc.forEach(function(filepath) {
      if (quiet) {
        count += 1;
      } else {
        grunt.log.write('Cleaning "' + filepath + '"...');
      }

      try {
        grunt.file.delete(filepath, options);
        if (!quiet) {
          grunt.log.ok();
        }
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn('Clean operation failed.');
      }
    });

    // Output summary
    if (quiet) {
      grunt.log.writeln('Cleaned %d item%s.', count, count === 1 ? '' : 's');
    }
  });

};
