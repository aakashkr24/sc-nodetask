"use strict";

var jwt = require("jsonwebtoken");

/** @exports  Authentication/Middleware*/
module.exports = {


    /**
     * Express middleware to check user validity
     * @param {Object} req HTTP request object
     * @param {String} req.username Username
     * @param {String} req.password Password
     * @param {Object} res HTTP response object
     * @param {Object} next Express next callback function
     */
    checkCredentials: function checkCredentials(req, res, next) {
        
        var username = req.body.username;
        var password = req.body.password;

        if (!username || !password) {
            return res.status(400).json({
                message: "Both username and password are required"
            });
        }

        return next();
    },


    /**
     * Express middleware to generate a JSON Web Token
     * @param {Object} req HTTP request object
     * @param {String} req.username Username
     * @param {String} req.password Password
     * @param {Object} res HTTP response object
     * @param {Object} next Express next callback function
     */
    generateToken: function(req, res, next) {
        
        // token expires in 10 minutes
        var token = jwt.sign({username: req.username, password: req.password}, "Social Cops", {expiresIn: 10 * 60});

        return res.status(200).json({token});
    }



};