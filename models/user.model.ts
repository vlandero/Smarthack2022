import { Role } from "./types";

export default class User{
    name: string;
    email: string;
    password: string;
    role: Role;
    position: string;
    department?: string;
}