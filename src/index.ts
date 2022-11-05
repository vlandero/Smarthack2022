const express = require('express');
const cors = require('cors');
const path = require('path')
import { Request,Response } from "express";
import * as mongoose from "mongoose";
import { ownerSchema, startupSchema } from "../models/mongo-models";
require('dotenv').config();


const app = express();
app.use(express.static(path.resolve(__dirname, '../fe/build')));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// mongoose.connect(process.env.MONGO_URI);
// const Startupp = mongoose.model('Startup', startupSchema);

// const startup = new Startupp({
//     name: "Startup 1",
//     employees: [],
//     menus: [{name: "Menu 1", items: []}],
// })

app.get("/x",async (req:Request,res:Response) => {
    // await startup.save()
    res.send({x:"Hello world"});
})

app.post("/api",(req:Request,res:Response) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.get('*', (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, '../fe/build', 'index.html'));
});

app.listen(1234, () => {
    console.log("App listening on 1234");
})