import StartUp from "./start-up.model";

export default class Owner{
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    startupsId: StartUp[];
    __v: number;
}