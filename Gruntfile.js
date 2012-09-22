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
      short: ["test/fixtures/sample_short"],
      long: {
        src: ["test/fixtures/sample_long"]
      }
    },

    // Unit tests.
    nodeunit: {
      tasks: ['test/*_test.js']
    }
  });
// Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask("default", ['jshint', 'clean', 'nodeunit']);
};
