"use strict";

var jsonpatch = require("json-patch");

var HTTP = require("../../constants").HTTP;

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
        
        if (!json || !patch) {
            return res.status(HTTP.BAD_REQUEST).json({
                name: "MISSING_REQUIRED_FIELDS_JSONPATCH",
                message: "Fields json and patch are required"
            });
        }

        try {
            
            var result = jsonpatch.apply(json, patch);

            return res.status(HTTP.OK).json({
                message: "JSON Patch successfully applied",
                response: {
                    result: result
                }
            });

        } catch (e) {

            return res.status(HTTP.BAD_REQUEST).json(e);
        
        }

    }

};