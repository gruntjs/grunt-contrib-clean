/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
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
      },
    },

    // Configuration to be run (and then tested).
    clean: {
      short: ['tmp/sample_short'],
      long: {
        src: ['tmp/sample_long'],
      },
      quiet: {
        src: ['tmp/sample_quiet/*', 'tmp/sample_quiet'],
        quiet: true,
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },
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

    // Add quiet.txt twice
    grunt.file.copy('test/fixtures/sample_quiet/quiet.txt', 'tmp/sample_quiet/quiet1.txt');
    grunt.file.copy('test/fixtures/sample_quiet/quiet.txt', 'tmp/sample_quiet/quiet2.txt');
  });

  // Whenever the 'test' task is run, first create some files to be cleaned,
  // then run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'clean', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
