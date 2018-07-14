module.exports = function(grunt) {
  const tasks = { scope: ['devDependencies', 'dependencies'] };
  const options = { config: { src: 'grunt-configs/*.js' } };
  const configs = require('load-grunt-configs')(grunt, options);
  require('load-grunt-tasks')(grunt, tasks);

  grunt.initConfig(configs);

  grunt.task.registerTask("develop", [
    "webpack:default"
  ]);
};