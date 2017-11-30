"use strict";

var jsonpatch = require("json-patch");

/** @exports JSON/middleware */
module.exports = {

    /**
     * Express middleware to apply json patch
     * @param {Object} req HTTP request object
     * @param {Object} req.json Base JSON object
     * @param {Object[]} req.patch JSON patch to be applied
     * @param {Object} res HTTP response object
     * @param {Object} next Express next callback function
     */
    apply: function apply(req, res, next) {
        
        var json = req.body.json;
        var patch = req.body.patch;

        try {
            
            var result = jsonpatch.apply(json, patch);

            return res.status(200).json(result);

        } catch (e) {
            return res.status(400).json(e);
        }

    }

};