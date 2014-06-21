module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [
      'js/vendor/**/*.js'
    ],
    autoWatch: true,
    frameworks: [
      'jasmine'
    ],
    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],
    plugins: [
      'karma-jasmine'
    ],
    singleRun: false
  });
};
