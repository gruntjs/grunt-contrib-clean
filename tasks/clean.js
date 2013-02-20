/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var fs = require('fs');
  var path = require('path');

  grunt.registerMultiTask('clean', 'Clean files and folders.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      force: false,
      deleteEmptyFolders: false
    });

    grunt.verbose.writeflags(options, 'Options');

    // Clean specified files / dirs.
    this.filesSrc.forEach(function(filepath) {
      grunt.log.write('Cleaning "' + filepath + '"...');

      try {
        grunt.file.delete(filepath, options);
        grunt.log.ok();

        if(options.deleteEmptyFolders) {
            var folder = path.dirname(filepath);
            while((options.force || grunt.file.isPathInCwd(folder)) && !fs.readdirSync(folder).length) {
                grunt.log.write('Cleaning empty folder "' + folder + '"...');
                grunt.file.delete(folder, options);
                grunt.log.ok();
                folder = path.dirname(folder);
            }
        }

      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn('Clean operation failed.');
      }
    });
  });

};
