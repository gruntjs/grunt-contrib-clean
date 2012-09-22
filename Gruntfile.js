module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', '<config:nodeunit.tasks>'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    },

    // Configuration to be run (and then tested).
    clean: {
      test: ['tmp'],
      short: ["tmp/sample_short"],
      long: {
        src: ["tmp/sample_long"]
      }
    },

    // Unit tests.
    nodeunit: {
      tasks: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Setup a test helper to create a folder to clean.
  grunt.registerTask('copy', 'Copy fixtures to a temp location', function() {
    grunt.file.copy("test/fixtures/sample_long/long.txt", "tmp/sample_long/long.txt");
    grunt.file.copy("test/fixtures/sample_short/short.txt", "tmp/sample_short/short.txt");
  });

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', 'clean copy nodeunit');

  // By default, lint and run all tests.
  grunt.registerTask("default", ['jshint', 'copy', 'clean', 'nodeunit']);
};
