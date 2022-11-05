import { Role } from "./types";

export default class User{
    name: string;
    email: string;
    password: string;
    salary: number;
    role: Role;
    position: string;
    department?: string;
}