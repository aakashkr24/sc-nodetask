"use strict";

var app = require("../app");
var request = require("supertest");

test("Successful login with username and password", () => {
    
    return request(app)
    .post("/login")
    .send({username : "test" , "password": "test"})
    .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("User Authentication Successful");
        expect(response.body.response.token).toBeTruthy();
    });
});

test("Fail Login with no username", () => {
    return request(app)
    .post("/login")
    .send({"password": "test"})
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });
});

test("Fail Login with no password", () => {
    return request(app)
    .post("/login")
    .send({username : "test"})
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });
});

test("Fail Login with no username and password", () => {
    return request(app)
    .post("/login")
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });
});