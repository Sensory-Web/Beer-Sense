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
    reporters: [
      'progress',
      'coverage'
    ],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'js/*.js': ['coverage']
    },
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],
    singleRun: false
  });
};
