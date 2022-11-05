import User from "./user.model";
import StartUp from "./start-up.model";

export default class Owner extends User{
    startUps: StartUp[];
}