module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [
    ],
    reporters: [
      'spec',
      'growl'
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
