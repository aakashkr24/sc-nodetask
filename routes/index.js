"use strict";

var image = require("./image");

module.exports = function(app) {

    app.get("/test", function(req, res, next) {
        return res.json({
            "Hello": "World"
        });
    });

    app.get("/thumbnail", image.thumbnail);

};