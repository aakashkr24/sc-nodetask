"use strict";

var json = require("./jsonPatch");

var image = require("./image");

module.exports = function(app) {

    app.get("/thumbnail", image.thumbnail);

    app.put("/jsonpatch", json.apply);

};