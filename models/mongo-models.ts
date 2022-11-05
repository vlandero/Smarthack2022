import mongoose from "mongoose";

export const startupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    logo: {type: String, required: false},
    employees: {type: Array, required: true},
    menus: {type: Array, required: true}
})

export const ownerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    startupsId: {type: Array, required: true}
})