"use strict";

module.exports = function(app) {

    app.get("/test", function(req, res, next) {
        return res.json({
            "Hello": "World"
        });
    });

};