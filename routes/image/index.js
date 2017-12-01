"use strict";

var axios = require("axios");

var image = require("./image");

var HTTP = require("../../constants").HTTP;

/** @exports Image/Middleware */
module.exports = {

    /**
     * Express middleware to generate a thumbnail
     * @param {Object} req HTTP request object
     * @param {String} req.url Url of image to resize
     * @param {Object} res HTTP response object
     * @param {Object} next Express next callback function
     */
    thumbnail: function thumbnail (req, res, next) {

        var url = req.query.url;
        
        url = decodeURIComponent(url);

        var headers;

        axios.head(url)
        .then((res) => {
            headers = res.headers;

            if (headers["Content-Type"].indexof('image') == -1) {
                throw new Error("URL provided is not image type");
            }
        })
        .then(() => axios.get(url, {responseType: 'arraybuffer'}))
        .then(function(res) {
            return image.resize(res, {width: 50, height: 50}, 'white');
        })
        .then((buffer) => {

            res.set({
                'Content-Type': headers['content-type'],
                'Content-Length': buffer.length,
                'Content-Disposition': "attachment; filename=\"thumbnail.jpg\""
            });

            res.status(HTTP.OK).end(buffer);
        })
        .catch((err) => {
            
            res.status(HTTP.BAD_REQUEST).json({
                name: "INVALID_IMAGE",
                message: err.message || "Invalid image resource"
            });

        });

    }

};