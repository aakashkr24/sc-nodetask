"use strict";

var sharp = require("sharp");

/** @exports Image/Utility*/
var image = {

    /**
     * Resize image to provided resolution, padding color to extra background space
     * @param {string|Buffer} input can be a Buffer containing image data, or a String containing the path to an image file.
     * @param {Object} size desired size of image.
     * @param {Number} size.width desired width.
     * @param {Number} size.height desired height.
     * @param {string} color string to be parsed by npm color module.
     * @returns {Promise} return Promise <Buffer>.
     */
    resize: function thumbnail (input, size, color) {

        return sharp(input)
        .resize(size.width, size.height)
        .background(color)
        .embed()
        .toBuffer();
    }
        

};

module.exports = image;