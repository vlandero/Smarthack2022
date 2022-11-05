import mongoose from "mongoose";

export const startupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    logo: {type: String, required: false},
    employees: {type: Array, required: true},
    menus: {type: Array, required: true}
});

export const ownerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    startupsId: {type: Array, required: true}
});

export const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    salary: {type: Number, required: false},
    role: {type: String, required: false},
    position: {type: String, required: false},
    department: {type: String, required: false},
    startupId: {type: String, required: true}
});
