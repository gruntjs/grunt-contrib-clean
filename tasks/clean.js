/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('clean', 'Clean files and folders.', function() {

    var helpers = require('grunt-contrib-lib').init(grunt);
    var options = helpers.options(this);

    grunt.verbose.writeflags(options, 'Options');
    var paths = grunt.file.expand(this.files[0].src);

    paths.forEach(function(path) {
      grunt.log.write('Cleaning "' + path + '"...');
      try {
        require('rimraf').sync(path);
        grunt.log.ok();
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn('Clean operation failed.');
      }
    });
  });

};
