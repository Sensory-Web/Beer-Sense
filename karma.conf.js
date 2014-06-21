module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [
    ],
    autoWatch: true,
    frameworks: [
      'mocha',
      'expect'
    ],
    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],
    plugins: [
    ],
    singleRun: false
  });
};
