"use strict";

var logger = require("morgan");
var express = require("express");
var bodyparser = require("body-parser");

var app = express();

var PORT = 2048;

app.set('port', PORT);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use(logger("tiny"));

app.use(express.Router());

require("./routes")(app);

app.use(function(req, res, next) {
    return res.sendStatus(404);
});

app.listen(PORT, () => {console.log(`App stared at port ${PORT}`);});