module.exports = function(grunt) {
  "use strict";

  grunt.file.mkdir("tmp/test");

  grunt.initConfig({

    clean: {
      tmp: ["tmp"]
    },

    test: {
      tasks: ["*_test.js"]
    }

  });

  grunt.loadTasks("../tasks");
  grunt.registerTask("default", "clean test");
};
