const express = require('express');
const cors = require('cors');
const path = require('path')
import { Request,Response } from "express";
import * as mongoose from "mongoose";
require('dotenv').config();


const app = express();
app.use(express.static(path.resolve(__dirname, './fe/build')));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// mongoose.connect(process.env.MONGO_URI);
console.log(process.env.MONGO_URI);

app.get("/x",(req:Request,res:Response) => {
    res.send({x:"Hello world"});
})

app.post("/api",(req:Request,res:Response) => {
    console.log(req.body);
    res.status(400).send('Hello');
})

app.get('*', (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, './fe/build', 'index.html'));
});

app.listen(1234, () => {
    console.log("App listening on 1234");
})