"use strict";

module.exports = {
    "testEnvironment": "node",
    "collectCoverage": true,
    "collectCoverageFrom" : [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!jest.config.js",
        "!server.js"
    ]
};