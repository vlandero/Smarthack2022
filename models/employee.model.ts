import { Role } from "./types";

export default class Employee{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    salary?: number;
    role?: Role;
    position?: string;
    department?: string;
}