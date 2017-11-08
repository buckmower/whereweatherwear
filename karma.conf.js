module.exports = function (config) {
  const path = require('path')
  const argv = require('yargs').argv;
  let testFiles;

  switch (argv.test) {
    case 'unit':
      testFiles = 'webpack/webpack.config.tests.unit.js';
      break;
    case 'integration':
      testFiles = 'webpack/webpack.config.tests.integration.js';
      break;
    default:
      testFiles = 'webpack/webpack.config.tests.all.js';
      break;
  }
  // Manually set the file bundle because if you do it in the config block
  // it says it can't find require
  config.files.push(testFiles);
  config.files.push('./node_modules/babel-polyfill/dist/polyfill.js');
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    plugins: [
      'karma-*',
    ],
    reporters: ['mocha', 'coverage'],
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },
    browserConsoleLogOptions: {
      level: 'log',
      terminal: true
    },
    coverageReporter: {
      check: {
        global: {
          lines: 80
        }
      },
      reporters: [
        {
          type: 'cobertura',
          dir: './coverage/'
        },
        {
          type: 'html',
          dir: './coverage/'
        }
      ]
    },
    webpackServer: {
      noInfo: true
    }
  });
};