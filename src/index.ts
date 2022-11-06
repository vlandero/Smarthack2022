const express = require('express');
const cors = require('cors');
const path = require('path')
const session = require('express-session');
import { Request, Response } from "express";
import Employee from "../models/employee.model";
import Owner from "../models/owner.model";
import Startup from "../models/start-up.model";
// import Startup from "models/start-up.model";
import * as mongoose from "mongoose";
import { ownerSchema, startupSchema } from "../models/mongo-models";
require('dotenv').config();

declare module "express-session" {
    interface SessionData {
        role?: "owner" | "employee" | null
        username?: string | null
        startupId?: string
    }
}

const app = express();
app.use(express.static(path.resolve(__dirname, '../fe/build')));
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


mongoose.connect(process.env.MONGO_URI);
export const StartupModel = mongoose.model('Startup', startupSchema);
export const OwnerModel = mongoose.model('Owner', ownerSchema);

app.post("/register-owner", async (req: Request, res: Response) => {
    const { firstName, lastName, username, email, password } = req.body;
    const owner = new OwnerModel({
        firstName,
        lastName,
        username,
        email,
        password,
        startupsId: [],
    });
    await owner.save();
    res.send(owner);
});

app.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username);
    // query on username
    const owner = await OwnerModel.findOne({ username,password }).lean();
    console.log(owner);
    if (owner) {
        req.session.role = "owner";
        req.session.username = username;
        req.session.save();
        return res.send({...req.session, message: "Logged in as owner"});
    }
    const startupId = username.split("_")[0];
    const startup: Startup | null = await StartupModel.findById(startupId);
    if (startup) {
        const employee = startup.employees.find(employee => employee.username === username && employee.password === password);
        if (employee) {
            req.session.role = "employee";
            req.session.username = username;
            res.send({...req.session, message: "Logged in as employee"});
        }
    }
    req.session.username = null;
    res.send({...req.session, message: "Error logging in"});
});
app.post("/session", (req: Request, res: Response) => {
    res.send(req.session);
});

app.post("/register-employee", async (req: Request, res: Response) => {
    const { firstName, lastName, salary, position, role, department } = req.body;
    const startupId = req.session.startupId;
    const startup = await StartupModel.findById(startupId);
    if (startup) {
        const employee: Employee = {
            firstName,
            lastName,
            username: `${startupId}_${startup.employees.length + 1}`,
            password: "password",
            salary: salary || undefined,
            position: position || undefined,
            role: role || undefined,
            department: department || undefined,
        };
        startup.employees.push(employee);
        await startup.save();
        return res.send(employee);
    }
    res.send(startup);
});

app.post("/create-startup", async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const startup = new StartupModel({
        name,
        description: description || undefined,
        employees:[],
        menus: [],
    });
    await startup.save();
    const owner = await OwnerModel.findOne({ username: req.session.username });
    if (owner) {
        owner.startupsId.push(startup._id);
        await owner.save();
    }
    req.session.startupId = startup._id.toString();
    res.send(startup);
});

app.post("/set-startup", async (req: Request, res: Response) => {
    const { startupId } = req.body;
    req.session.startupId = startupId;
    res.send(req.session);
});

//get all startups from owner
app.post("/get-startups", async (req: Request, res: Response) => {
    const owner = await OwnerModel.findOne({ username: req.body.username });
    if (owner) {
        const startups = await StartupModel.find({ _id: { $in: owner.startupsId } });
        return res.send(startups);
    }
    res.send([]);
});

app.post("/api", (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../fe/build', 'index.html'));
});

app.listen(80, () => {
    console.log("App listening on 80");
})