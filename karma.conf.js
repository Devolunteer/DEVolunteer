const webpack= require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    port: 9876,
    colors: true,
    basePath: '',
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['mocha'],
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    logLevel: config.LOG_INFO,
    failOnEmptyTestSuite: false,
    preprocessors: {
      'client-test/*-test.js': ['webpack'],
      'app/entry.js': ['webpack']
    },
    files: [
      'app/entry.js',
      'client-test/*-test.js',
      'node_modules/angular-mocks/angular-mocks.js'
    ]
  });
};
