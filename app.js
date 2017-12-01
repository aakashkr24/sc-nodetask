"use strict";

var logger = require("morgan");
var express = require("express");
var bodyparser = require("body-parser");
var expressJWT = require("express-jwt");

var app = express();

var PORT = process.env.PORT || 4096;

app.set('port', PORT);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use(logger("tiny"));

app.use('/static', express.static(require("path").join(__dirname, 'public')));

app.use(expressJWT({secret: "Social Cops"}).unless({path: ['/login']}));

app.use(express.Router());

require("./routes")(app);

app.use(function(req, res, next) {
    return res.sendStatus(404);
});

// Do not start server for test mode
if (process.env.NODE_ENV != "TEST") {
    app.listen(PORT, () => {console.log(`App stared at port ${PORT}`);});    
}
// For running test
module.exports = app;
