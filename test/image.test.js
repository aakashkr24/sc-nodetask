"use strict";

var app = require("../app");
var request = require("supertest");

var token;

beforeAll(() => {
    
    return request(app)
    .post("/login")
    .send({username: "test", password: "test"})
    .then((response) => {
        token = response.body.response.token ;
    });

});

test("Valid Image Url", () => {
    
    return request(app)
    .get("/thumbnail")
    .set("Authorization", `Bearer ${token}`)
    .query({url: "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"})
    .then((response) => {
        expect(response.statusCode).toBe(200);
    });

});

test("Invalid Image Url", () => {
    
    return request(app)
    .get("/thumbnail")
    .set("Authorization", `Bearer ${token}`)
    .query({url: "https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=ER0hWuL-H7SH8QfXzpXoDA"})
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });

});