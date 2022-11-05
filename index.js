"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();
app.use(express.static(path.resolve(__dirname, './fe/build')));
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.get("/x", function (req, res) {
    res.send({ x: "Hello world" });
});
app.post("/api", function (req, res) {
    console.log(req.body);
    res.status(400).send('Hello');
});
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, './fe/build', 'index.html'));
});
app.listen(1234, function () {
    console.log("App listening on 1234");
});
