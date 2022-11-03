"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.get("/", function (req, res) {
    res.send("Hello");
});
app.get("/x", function (req, res) {
    res.send({ x: "Hello world" });
});
app.post("/api", function (req, res) {
    console.log(req.body);
    res.status(400).send('Hello');
});
app.listen(1234, function () {
    console.log("App listening on 1234");
});
