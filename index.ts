const express = require('express');
const cors = require('cors');
import { Request,Response } from "express";


const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/",(req:Request,res:Response) => {
    res.send("Hello there new");
})

app.get("/x",(req:Request,res:Response) => {
    res.send({x:"Hello world"});
})

app.post("/api",(req:Request,res:Response) => {
    console.log(req.body);
    res.status(400).send('Hello');
})

app.listen(1234, () => {
    console.log("App listening on 1234");
})