"use strict";

var sharp = require("sharp");

var imageUtil = require("../routes/image/image");

test("Resizing Valid Image", () => {

    //testing with image path.
    imageUtil.resize(require("path").join(__dirname, '../public/images/1.jpg'), {width: 100, height: 100}, "white")
    .then((buffer) => {
        
        sharp(buffer)
        .metadata()
        .then((meta) => {
            expect(meta.width).toBe(100);
            expect(meta.height).toBe(100);
        });
    
    });

});

test("Resizing Valid Image", () => {
    //testing with image path.
    return imageUtil.resize(require("path").join(__dirname, '../public/images/invalid'), {width: 100, height: 100}, "white")
    .catch((e) => {
        expect(e).toBeTruthy();
    });
    
});