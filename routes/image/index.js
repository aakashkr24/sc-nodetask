"use strict";

var axios = require("axios");

var image = require("./image");

module.exports = {

    thumbnail: function thumbnail (req, res, next) {

        var url = req.query.url;
        
        url = decodeURIComponent(url);

        var headers;

        axios.head(url)
        .then((res) => {
            headers = res.headers;
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

            res.status(200).end(buffer);
        })
        .catch((err) => {
            console.log(err);
        });

    }

};