"use strict";

var auth = require("./authentication");

var json = require("./jsonPatch");

var image = require("./image");

module.exports = function(app) {

    app.post("/login", auth.checkCredentials, auth.generateToken);

    app.get("/thumbnail", image.thumbnail);

    app.put("/jsonpatch", json.apply);

};