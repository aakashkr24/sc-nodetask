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

test("Valid JSON and JSON Patch", () => {
    
    return request(app)
    .put("/jsonpatch")
    .set("Authorization", `Bearer ${token}`)
    .send({
        json: {},
        patch: [{"op": "add", "path": "/foo", "value": "bar"}]
    })
    .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("JSON Patch successfully applied");
        expect(response.body.response.result).toMatchObject({
            foo: "bar"
        });
    });

});

test("Invalid JSON and valid JSON Patch", () => {
    
    return request(app)
    .put("/jsonpatch")
    .set("Authorization", `Bearer ${token}`)
    .send({
        patch: [{"op": "add", "path": "/foo", "value": "bar"}]
    })
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });

});

test("Valid JSON and invalid JSON Patch", () => {
    
    return request(app)
    .put("/jsonpatch")
    .set("Authorization", `Bearer ${token}`)
    .send({
        json: {}
    })
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });

});

test("Invalid JSON and JSON Patch", () => {
    
    return request(app)
    .put("/jsonpatch")
    .set("Authorization", `Bearer ${token}`)
    .send({})
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });

});

test("Invalid JSON and JSON Patch", () => {
    
    return request(app)
    .put("/jsonpatch")
    .set("Authorization", `Bearer ${token}`)
    .send({
        json: {},
        patch: [{foo: '/bar'}]
    })
    .then((response) => {
        expect(response.statusCode).toBe(400);
    });

});