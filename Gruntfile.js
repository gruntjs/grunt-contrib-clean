/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    clean: {
      shortPathTest: ['tmp/sample_short'],
      longPathTest: {
        src: ['tmp/sample_long']
      },
      exclude: ['tmp/end_01/**/*', '!tmp/end_01/1.txt'],
      excludeSub: ['tmp/end_02/**/*.*', '!tmp/end_02/2/**/*']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Setup a test helper to create some folders to clean.
  grunt.registerTask('copy', 'Copy fixtures to a temp location.', function() {
    grunt.file.copy('test/fixtures/sample_long/long.txt', 'tmp/sample_long/long.txt');
    grunt.file.copy('test/fixtures/sample_short/short.txt', 'tmp/sample_short/short.txt');

    var cwd = 'test/fixtures/start';
    grunt.file.expand({
      cwd: cwd
    }, '**/*.*')
    .forEach(function (file) {
      var ecwd = 'test/expected';
      grunt.file.expand({
        cwd: ecwd
      }, '*')
      .forEach(function (dir) {
        grunt.file.copy(cwd + '/' + file, 'tmp/' + dir + '/' + file);
      });
    });
  });

  // Whenever the 'test' task is run, first create some files to be cleaned,
  // then run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'copy', 'clean', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
