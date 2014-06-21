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
    ],
    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],
    singleRun: false
  });
};
