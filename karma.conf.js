const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        // start these browsers
        browsers: ['ChromeHeadless'],
        reporters: ['progress'],
        logLevel: config.LOG_INFO,
        singleRun: false
    });
};