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
    var options = this.options();

    grunt.verbose.writeflags(options, 'Options');

    // Clean specified files / dirs.
    this.file.src.forEach(function(filepath) {
      grunt.log.write('Cleaning "' + filepath + '"...');
      try {
        grunt.file.delete(filepath);
        grunt.log.ok();
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn('Clean operation failed.');
      }
    });
  });

};
